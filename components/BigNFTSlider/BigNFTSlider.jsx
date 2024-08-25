import React, { useState, useEffect, useCallback, useContext } from 'react';
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
import { GrView } from "react-icons/gr";

import Style from './BigNFTSlider.module.css';
import Button from '../Button/Button';
import { NFTMarketPlaceContext } from '../../Context/NFTMarketPlaceContext';
import { RiAccountCircleFill } from "react-icons/ri";
import Link from "next/link";

const BigNftSlider = () => {
    const { fetchNFTs, buyNFT, currentAccount } = useContext(NFTMarketPlaceContext);

    const [nfts, setNfts] = useState([]);
    const [idNumber, setIdNumber] = useState(0);

    useEffect(() => {
        const fetchAndSetNFTs = async () => {
            try {
                const fetchedNFTs = await fetchNFTs();
                setNfts(fetchedNFTs?.reverse() || []);
            } catch (error) {
                console.error("Failed to fetch NFTs:", error);
            }
        };

        fetchAndSetNFTs();
    }, [fetchNFTs]);

    const inc = useCallback(() => {
        if (idNumber + 1 < nfts.length) {
            setIdNumber(idNumber + 1);
        }
    }, [idNumber, nfts.length]);

    const dec = useCallback(() => {
        if (idNumber > 0) {
            setIdNumber(idNumber - 1);
        }
    }, [idNumber]);

    return (
        <div className={Style.bigNFTSlider}>
            <div className={Style.bigNFTSlider_box}>
                {nfts.length > 0 && (
                    <>
                        <div className={Style.bigNFTSlider_box_left}>
                            <h2>{nfts[idNumber].name} #{nfts[idNumber].tokenId}</h2>
                            <div className={Style.bigNFTSlider_box_left_creator}>
                                <div className={Style.bigNFTSlider_box_left_creator_profile}>
                                    <RiAccountCircleFill size={40}/>
                                    {/*<Image*/}
                                    {/*    src={nfts[idNumber].image}*/}
                                    {/*    alt="profile"*/}
                                    {/*    width={50}*/}
                                    {/*    height={50}*/}
                                    {/*    className={Style.bigNFTSlider_box_left_creator_profile_img}*/}
                                    {/*/>*/}
                                    <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
                                        <p>Creator</p>
                                        <h4>
                                            {`${nfts[idNumber].owner.slice(0, 5)}...${nfts[idNumber].owner.slice(-5)}`}
                                            <span>
                                                <MdVerified />
                                            </span>
                                        </h4>
                                    </div>
                                </div>

                                {/*<div className={Style.bigNFTSlider_box_left_creator_collection}>*/}
                                {/*    <AiFillFire*/}
                                {/*        className={Style.bigNFTSlider_box_left_creator_collection_icon}*/}
                                {/*    />*/}
                                {/*    <div className={Style.bigNFTSlider_box_left_creator_collection_info}>*/}
                                {/*        <p>Collection</p>*/}
                                {/*        <h4>{nfts[idNumber].description || "Unknown"}</h4>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>

                            <div className={Style.bigNFTSlider_box_left_bidding}>
                                <div className={Style.bigNFTSlider_box_left_bidding_box}>
                                    <small>Current Bid</small>
                                    <p>
                                        {nfts[idNumber].price} ETH
                                    </p>
                                </div>

                                {/*<p className={Style.bigNFTSlider_box_left_bidding_box_auction}>*/}
                                {/*    <MdTimer*/}
                                {/*        className={Style.bigNFTSlider_box_left_bidding_box_icon}*/}
                                {/*    />*/}
                                {/*    <span>Auction ending in</span>*/}
                                {/*</p>*/}

                                {/* Replace with real-time logic if needed */}
                                {/*<div className={Style.bigNFTSlider_box_left_bidding_box_timer}>*/}
                                {/*    <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>*/}
                                {/*        <p>00</p>*/}
                                {/*        <span>Days</span>*/}
                                {/*    </div>*/}

                                {/*    <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>*/}
                                {/*        <p>00</p>*/}
                                {/*        <span>Hours</span>*/}
                                {/*    </div>*/}

                                {/*    <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>*/}
                                {/*        <p>00</p>*/}
                                {/*        <span>Minutes</span>*/}
                                {/*    </div>*/}

                                {/*    <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>*/}
                                {/*        <p>00</p>*/}
                                {/*        <span>Seconds</span>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                <div className={Style.bigNFTSlider_box_left_button}>
                                    {nfts[idNumber] && nfts[idNumber].seller && nfts[idNumber].owner && currentAccount === nfts[idNumber].seller.toLowerCase() ? (
                                            <p>
                                                You already own this NFT!
                                            </p>
                                        ) : (<Button btnName="Buy" handleClick={() => buyNFT(nfts[idNumber])} />)}

                                    <div className={Style.viewNFTContainer}>
                                        <Link href={{ pathname: '/nft-details', query: { ...nfts[idNumber] } }}>
                                            <a>
                                                <GrView className={Style.viewIcon} size={40} />
                                            </a>
                                        </Link>
                                        <p>View NFT</p>
                                    </div>
                                </div>

                            </div>

                            <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                                <TbArrowBigLeftLines
                                    className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                                    onClick={dec}
                                />
                                <TbArrowBigRightLine
                                    className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                                    onClick={inc}
                                />
                            </div>
                        </div>

                        <div className={Style.bigNFTSlider_box_right}>
                            <div className={Style.bigNFTSlider_box_right_box}>
                                <Image
                                    src={nfts[idNumber].image}
                                    alt="nft image"
                                    width={900}
                                    height={900}
                                    className={Style.bigNFTSlider_box_right_img}
                                />

                                {/*<div className={Style.bigNFTSlider_box_right_like}>*/}
                                {/*    <AiFillHeart />*/}
                                {/*    <span>0</span>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default BigNftSlider;
