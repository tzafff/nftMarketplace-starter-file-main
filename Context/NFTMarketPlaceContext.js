import React, {useEffect, useState, useContext} from 'react'
import {ethers} from "ethers";
import Web3Modal from "web3modal"
import {NFTMarketplaceAddress, NFTMarketplaceABI} from './constants'
import Router from 'next/router'
import axios from "axios";
import {create as ipfsHttpClient} from "ipfs-http-client"

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0")


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
        console.log("Something went wrong while connecting with contract")

    }
}

export const NFTMarketPlaceContext = React.createContext();
export const NFTMarketPlaceProvider = (({children}) => {
    const titleData = "Discover, collect, and sell NFTs"

    //--------USE STATES
    const [currentAccount, setCurrentAccount] = useState("");

    //--------CHECK IF WALLET IS CONNECTED
    const checkIfWalletIsConnected = async () => {
        try {
            if (!window.ethereum) return console.log("Please Install Metamask");

            const account = await window.ethereum.request({method: "eth_accounts"});

            if (account.length) {
                setCurrentAccount(account[0])
            } else {
                console.log("No Account Found")

            }


        } catch (error) {
            console.log("Something went wrong while connecting wallet!")

        }
    }

    useEffect(() => {
        checkIfWalletIsConnected()
    }, []);

    //--------CONNECT WALLET
    const connectWallet = async () => {
        try {
            if (!window.ethereum) return console.log("Please Install Metamask");

            const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
            setCurrentAccount(accounts[0])
            window.location.reload()

        } catch (error) {
            console.log("Something went wrong while connecting wallet!")
        }
    }

    //--------UPLOAD TO IPFS
    const uploadToIpfs = async (file) => {
        try {
            const added = await client.add({content: file})
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            return url;
        } catch (error) {
            console.log("Error uploading to IPFS")

        }
    }

    //--------CREATE AN NFT
    const createNFT = async (formInput, fileUrl, router) => {
        const {name, description, price} = formInput;
        if (!name || !description || !price || !fileUrl) return console.log("Form Input Data missing")

        const data = JSON.stringify({name, description, image: fileUrl})
        try {
            const added = await client.add(data);

            const url = `https://ipfs.infura.io/ipfs/${added.path}`

            await createSale(url, price)
        } catch (error) {
            console.log("Error while creating NFT")
        }
    }

    //--------CREATE SALE
    const createSale = async (url, formInputPrice, isReselling, id) => {
        try {
            const price = ethers.utils.parseUnits(formInputPrice, "ether");
            const contract = await connectingWithSmartContract();

            const listingPrice = await contract.getListingPrice();

            const transaction = !isReselling ? await contract.createToken(url, price, {
                value: listingPrice.toString(),
            }) : await contract.reSellToken(url, price, {
                value: listingPrice.toString(),
            });

            await transaction.wait();
        } catch (error) {
            console.log("Error while creating sale")

        }
    }


    //--------FETCH NFT FUNCTIONS
    const fetchNFTs = async () => {
        try {
            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider)

            const data = contract.fetchMarketItems();
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
            console.log("Error while fetching NFTS")

        }
    }

    //--------FETCH MY NFT OR LISTED NFT
    const fetchMyNFTsOrListedNFTs = async (type) => {
        try {
            const contract = await connectingWithSmartContract();

            const data = type === "fetchItemsListed"
                ? await contract.fetchItemsListed()
                : await contract.fetchMyNFT();

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
            console.log("Error while fetching Listed NFTs")

        }
    }

    //--------BUY NFTs
    const buyNFT = async (nft) => {
        const contract = await connectingWithSmartContract();
        const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

        const transaction = await contract.createMarketSale(nft.tokenId, {
            value: price,
        });

        await transaction.wait();
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
            currentAccount
        }}
    >
        {children}
    </NFTMarketPlaceContext.Provider>)
})
