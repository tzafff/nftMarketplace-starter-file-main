import React, {useEffect, useState, useContext} from 'react'
import {ethers} from "ethers";
import Web3Modal from "web3modal"
import {NFTMarketplaceAddress, NFTMarketplaceABI} from './constants'
import Router, {useRouter} from 'next/router'
import axios from "axios";


const pinataApiKey = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const pinataSecretApiKey = process.env.NEXT_PUBLIC_PINATA_API_SECRET_KEY;

// Fetch SC
const fetchContract = (signerOrProvider) => new ethers.Contract(NFTMarketplaceAddress, NFTMarketplaceABI, signerOrProvider);


// Connecting with SC
const connectingWithSmartContract = async () => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = fetchContract(signer)
        return contract;
    } catch (error) {
        console.error("Error connecting to the smart contract:", error.message);
        throw new Error("Failed to connect to the smart contract. Please try again.");

    }
}

export const NFTMarketPlaceContext = React.createContext();
export const NFTMarketPlaceProvider = (({children}) => {
    const titleData = "Discover, collect, and sell NFTs"

    //--------USE STATES
    const [error, setError] = useState("");
    const [openError, setOpenError] = useState(false);
    const [currentAccount, setCurrentAccount] = useState("");

    const router = useRouter();

    //--------CHECK IF WALLET IS CONNECTED
    const checkIfWalletIsConnected = async () => {
        try {
            if (!window.ethereum) {
                setError("MetaMask is not installed. Please install it to continue.");
                setOpenError(true);
                return;
            }

            const account = await window.ethereum.request({method: "eth_accounts"});

            if (account.length) {
                setCurrentAccount(account[0])
            } else {
                setError("No account found. Please connect your wallet.");
                setOpenError(true);
            }

        } catch (error) {
            setError("Failed to check if wallet is connected. Please try again.");
            setOpenError(true);
            console.error("Error checking wallet connection:", error.message);

        }
    }

    useEffect(() => {
        checkIfWalletIsConnected()
    }, []);

    //--------CONNECT WALLET
    const connectWallet = async () => {
        try {
            if (!window.ethereum) {
                setError("MetaMask is not installed. Please install it to continue.");
                setOpenError(true);
                return;
            }

            const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
            setCurrentAccount(accounts[0])

        } catch (error) {
            setError("Failed to connect wallet. Please try again.");
            setOpenError(true);
            console.error("Error connecting wallet:", error.message);
        }
    }

    //--------UPLOAD TO IPFS via Pinata
    const uploadToIpfs = async (file) => {
        const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

        //Prepare form data
        const formData = new FormData();
        formData.append("file", file);

        // Optional: Add metadata
        const metadata = JSON.stringify({
            name: 'My NFT Metadata',
            keyvalues: {
                exampleKey: 'exampleValue',
            },
        });
        formData.append("pinataMetadata", metadata);

        try {
            console.log("Uploading to IPFS via Pinata...");

            const response = await axios.post(url, formData, {
                maxBodyLength: "Infinity", // Prevent form data size limitation issues
                headers: {
                    "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                    pinata_api_key: pinataApiKey,
                    pinata_secret_api_key: pinataSecretApiKey,
                },
            });

            const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
            console.log("Uploaded successfully, IPFS URL:", ipfsUrl);
            return ipfsUrl;
        } catch (error) {
            setError("Failed to upload file to IPFS via Pinata. Please try again.");
            setOpenError(true);
            console.error("Error uploading to IPFS via Pinata:", error.message);
            throw error;
        }
    };

    //--------CREATE AN NFT
    const createNFT = async (name, price, image, description, router) => {
        if (!name || !description || !price || !image) {
            setError("All fields are required to create an NFT. Please complete the form.");
            setOpenError(true);
            return;
        }

        const metadata = JSON.stringify({ name, description, image });

        try {
            const response = await axios.post('https://api.pinata.cloud/pinning/pinJSONToIPFS', metadata, {
                headers: {
                    'Content-Type': 'application/json',
                    pinata_api_key: pinataApiKey,
                    pinata_secret_api_key: pinataSecretApiKey,
                },
            });

            const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
            console.log("Uploaded successfully, IPFS URL:", url);
            await createSale(url, price);
            await router.push('/searchPage');
        } catch (error) {
            setError('Failed to create NFT. Please check your input and try again.');
            setOpenError(true);
            console.error('Error creating NFT:', error.response ? error.response.data : error.message);
        }
    };

    //--------CREATE SALE
    const createSale = async (url, formInputPrice, isReselling, id) => {
        try {
            const price = ethers.utils.parseUnits(formInputPrice, "ether");
            const contract = await connectingWithSmartContract();

            const listingPrice = await contract.getListingPrice();

            const transaction = !isReselling ? await contract.createToken(url, price, {
                value: listingPrice.toString(),
            }) : await contract.resellToken(id, price, {
                value: listingPrice.toString(),
            });

            await transaction.wait();
            console.log(transaction)

        } catch (error) {
            setError("Failed to create sale. Please ensure you have sufficient funds and try again.");
            setOpenError(true);
            console.error("Error creating sale:", error.message);


        }
    }


    //--------UNLIST NFT
    const unlistNFT = async (tokenId) => {
        try {
            const contract = await connectingWithSmartContract();
            const transaction = await contract.unlistToken(tokenId);

            await transaction.wait();
            console.log("NFT unlisted successfully:", transaction);

            router.push('/searchPage'); // Redirect to a different page after unlisting
        } catch (error) {
            setError("Failed to unlist NFT. Please try again.");
            setOpenError(true);
            console.error("Error unlisting NFT:", error.message);
        }
    };


    //--------FETCH NFT FUNCTIONS
    const fetchNFTs = async () => {
        try {
            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider)

            const data = await contract.fetchMarketItems();
            //console.log(data)

            const items = await Promise.all(data.map(async ({tokenId, seller, owner, price: unformattedPrice}) => {
                const tokenURI = await contract.tokenURI(tokenId);

                const {
                    data: {image, name, description},
                } = await axios.get(tokenURI)
                const price = ethers.utils.formatUnits(unformattedPrice.toString(), "ether");

                return {
                    price, tokenId: tokenId.toNumber(), seller, owner, image, name, description, tokenURI
                };
            }));
            return items;

        } catch (error) {
            setError("Failed to fetch NFTs. Please refresh the page or try again later.");
            setOpenError(true);
            console.error("Error fetching NFTs:", error.message);

        }
    }

    useEffect(() => {
        fetchNFTs();
    }, []);

    //--------FETCH MY NFT OR LISTED NFT
    const fetchMyNFTsOrListedNFTs = async (type) => {
        try {
            const contract = await connectingWithSmartContract();

            const data = type === "fetchItemsListed"
                ? await contract.fetchItemsListed()
                : await contract.fetchMyNFTs();

            const items = await Promise.all(
                data.map(async ({tokenId, seller, owner, price: unformattedPrice}) => {
                    const tokenURI = await contract.tokenURI(tokenId)
                    const {
                        data: {image, name, description},
                    } = await axios.get(tokenURI);

                    const price = ethers.utils.formatUnits(
                        unformattedPrice.toString(),
                        "ether"
                    );

                    return{
                        price,
                        tokenId: tokenId.toNumber(),
                        seller,
                        owner,
                        image,
                        name,
                        description,
                        tokenURI
                    };
                })
            )

            return items;
        } catch (error) {
            setError("Failed to fetch your NFTs or listed NFTs. Please try again.");
            setOpenError(true);
            console.error("Error fetching NFTs:", error.message);
        }
    }

    useEffect(() => {
        fetchMyNFTsOrListedNFTs()
    }, []);

    //--------BUY NFTs
    const buyNFT = async (nft) => {
        const contract = await connectingWithSmartContract();
        const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

        const transaction = await contract.createMarketSale(nft.tokenId, {
            value: price,
        });

        await transaction.wait();
        await router.push("/creator")
    }


    return (<NFTMarketPlaceContext.Provider
        value={{
            checkIfWalletIsConnected,
            connectWallet,
            uploadToIpfs,
            createNFT,
            fetchNFTs,
            fetchMyNFTsOrListedNFTs,
            buyNFT,
            titleData,
            currentAccount,
            createSale,
            setOpenError,
            openError,
            error,
            setError,
            unlistNFT
        }}
    >
        {children}
    </NFTMarketPlaceContext.Provider>)
})
