import React, {useState, useEffect, useContext} from 'react'
import Image from "next/image";
import {MdVerified, MdCloudUpload, MdTimer, MdReportProblem, MdOutlineDeleteSweep} from "react-icons/md";
import {BsThreeDots} from "react-icons/bs";
import {FaWallet, FaPercentage} from "react-icons/fa";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
} from "react-icons/ti";
import {BiTransferAlt, BiDollar} from "react-icons/bi";

import Style from './NFTDescription.module.css'
import images from '../../img'
import {Button} from '../../components/index'
import {NFTTabs} from '../index'

import { NFTMarketPlaceContext } from '../../Context/NFTMarketPlaceContext'
import Link from "next/link";
import {useRouter} from "next/router";

const NftDescription = ({ nft }) => {
    const [social, setSocial] = useState(false);
    const [NFTMenu, setNFTMenu] = useState(false);
    const [history, setHistory] = useState(true);
    const [provenance, setProvenance] = useState(false);
    const [owner, setOwner] = useState(false);

    const router = useRouter()

    const historyArray = [
        images.user1,
        images.user2,
        images.user3,
        images.user4,
        images.user5,
    ]

    const provenanceArray = [
        images.user6,
        images.user7,
        images.user8,
        images.user9,
        images.user10,
    ]

    const ownerArray = [
        images.user3,
        images.user2,
        images.user4,
        images.user5,
        images.user1,
    ]

    const openSocial = () => {
        if(!social){
            setSocial(true)
            setNFTMenu(false)
        } else {
            setSocial(false)
        }
    }

    const openMenu = () => {
        if(!NFTMenu){
            setSocial(false)
            setNFTMenu(true)
        } else {
            setNFTMenu(false)
        }
    }

    const openTabs = (e) => {
        const btnText = e.target.innerText;

        if(btnText === 'Bid History'){
            setHistory(true)
            setProvenance(false)
            setOwner(false)
        } else if (btnText === 'Provenance') {
            setHistory(false)
            setProvenance(true)
            setOwner(false)
        }
    }

    const openOwner = () => {
        if(!owner) {
            setHistory(false)
            setProvenance(false)
            setOwner(true)
        } else{
            setOwner(false)
            setHistory(true)
        }
    }

    const { buyNFT, currentAccount } = useContext(NFTMarketPlaceContext);

    return (
        <div className={Style.NftDescription}>
            <div className={Style.NftDescription_box}>
                {/*    PART ONE*/}
                <div className={Style.NftDescription_box_share}>
                    {/*<p>Virtual Worlds</p>*/}
                    <div className={Style.NftDescription_box_share_box}>
                        {/*<MdCloudUpload*/}
                        {/*    className={Style.NftDescription_box_share_box_icon}*/}
                        {/*    onClick={() => openSocial()}*/}
                        {/*/>*/}

                        {/*{social && (*/}
                        {/*    <div className={Style.NftDescription_box_share_box_social}>*/}
                        {/*        <a href="#">*/}
                        {/*            <TiSocialFacebook/> FaceBook*/}
                        {/*        </a>*/}
                        {/*        <a href="#">*/}
                        {/*            <TiSocialTwitter/> Twitter*/}
                        {/*        </a>*/}
                        {/*        <a href="#">*/}
                        {/*            <TiSocialYoutube/> Youtube*/}
                        {/*        </a>*/}
                        {/*        <a href="#">*/}
                        {/*            <TiSocialInstagram/> Instagram*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*)}*/}

                        {/*<BsThreeDots*/}
                        {/*    className={Style.NftDescription_box_share_box_icon}*/}
                        {/*    onClick={() => openMenu()}*/}
                        {/*/>*/}

                        {/*{NFTMenu && (*/}
                        {/*    <div className={Style.NftDescription_box_share_box_social}>*/}
                        {/*        <a href="#">*/}
                        {/*            <BiDollar/> Change Price*/}
                        {/*        </a>*/}
                        {/*        <a href="#">*/}
                        {/*            <BiTransferAlt/> Transfer*/}
                        {/*        </a>*/}
                        {/*        <a href="#">*/}
                        {/*            <MdReportProblem/> Report*/}
                        {/*        </a>*/}
                        {/*        <a href="#">*/}
                        {/*            <MdOutlineDeleteSweep/> Delete Item*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                    </div>
                </div>

                {/*     PART TWO*/}
                <div className={Style.NftDescription_box_profile}>
                    <h1>{nft.name} #{nft.tokenId}</h1>
                    <div className={Style.NftDescription_box_profile_box}>
                        <div className={Style.NftDescription_box_profile_box_left}>
                            <Image
                                src={images.user1}
                                alt={"profile"}
                                width={40}
                                height={40}
                                className={Style.NftDescription_box_profile_box_left_img}
                            />

                            <div className={Style.NftDescription_box_profile_left_info}>
                                <small>Owner</small>

                                <br/>
                                <Link href={{pathname: '/author', query: `${nft.seller}`}}>
                                    <span>
                                        {`${nft.seller.slice(0, 5)}...${nft.seller.slice(-5)}`}
                                        <MdVerified/>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/*<div className={Style.NftDescription_box_profile_box_right}>*/}
                        {/*    <Image*/}
                        {/*        src={images.creatorbackground1}*/}
                        {/*        alt={"profile"}*/}
                        {/*        width={40}*/}
                        {/*        height={40}*/}
                        {/*        className={Style.NftDescription_box_profile_box_left_img}*/}
                        {/*    />*/}

                        {/*    <div className={Style.NftDescription_box_profile_box_right_info}>*/}
                        {/*        <small>Collection</small>*/}
                        {/*        <br/>*/}
                        {/*        <span>*/}
                        {/*           LIL UZI*/}
                        {/*            <MdVerified/>*/}
                        {/*        </span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>


                    <div className={Style.NftDescription_box_profile_biding}>
                        {/*<p>*/}
                        {/*    <MdTimer/>*/}
                        {/*    <span>*/}
                        {/*    Auction ending in:*/}
                        {/*</span>*/}
                        {/*</p>*/}

                        {/*<div className={Style.NftDescription_box_profile_biding_box_timer}>*/}
                        {/*    <div className={Style.NftDescription_box_profile_biding_box_timer_item}>*/}
                        {/*        <p>2</p>*/}
                        {/*        <span>Days</span>*/}
                        {/*    </div>*/}
                        {/*    <div className={Style.NftDescription_box_profile_biding_box_timer_item}>*/}
                        {/*        <p>22</p>*/}
                        {/*        <span>Hours</span>*/}
                        {/*    </div>*/}
                        {/*    <div className={Style.NftDescription_box_profile_biding_box_timer_item}>*/}
                        {/*        <p>45</p>*/}
                        {/*        <span>Minutes</span>*/}
                        {/*    </div>*/}
                        {/*    <div className={Style.NftDescription_box_profile_biding_box_timer_item}>*/}
                        {/*        <p>12</p>*/}
                        {/*        <span>Seconds</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className={Style.NftDescription_box_profile_biding_box_price}>
                            <div className={Style.NftDescription_box_profile_bidding_box_price_bid}>
                                <small>Current Price</small>
                                <p>
                                    {nft.price} ETH
                                </p>
                            </div>

                            {/*<span>[96 in stock]</span>*/}
                        </div>

                        <div className={Style.NftDescription_box_biding_box_button}>

                            {nft && nft.seller && nft.owner && currentAccount === nft.seller.toLowerCase() ? (
                                <p>
                                    You cannot buy your own NFT!
                                </p>
                            ) : nft && nft.owner && currentAccount === nft.owner.toLowerCase() ? (
                                <Button
                                    icon={<FaWallet />}
                                    btnName={"List on MarketPlace"}
                                    handleClick={() => router.push(`/resell-token?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)}
                                    classStyle={Style.button}
                                />
                            ) : (
                                <Button
                                    icon={<FaWallet />}
                                    btnName={"Buy NFT"}
                                    handleClick={() => buyNFT(nft)}
                                    classStyle={Style.button}
                                />
                            )}



                            {/*<Button*/}
                            {/*    icon=<FaPercentage/>*/}
                            {/*    btnName={"Make offer"}*/}
                            {/*    handleClick={() => {*/}
                            {/*    }}*/}
                            {/*    classStyle={Style.button}*/}
                            {/*/>*/}
                        </div>

                        <div className={Style.NftDescription_box_profile_biding_box_tabs}>
                            {/*<button onClick={(e) => openTabs(e)}>Bid History</button>*/}
                            {/*<button onClick={(e) => openTabs(e)}>Provenance</button>*/}
                            <button >Current Owner</button>
                        </div>

                        {/*{history && (*/}
                        {/*    <div className={Style.NftDescription_box_profile_biding_box_card}>*/}
                        {/*        <NFTTabs dataTab={historyArray}/>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                        {/*{provenance && (*/}
                        {/*    <div className={Style.NftDescription_box_profile_biding_box_card}>*/}
                        {/*        <NFTTabs dataTab={provenanceArray}/>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                        <p>
                            {nft.seller}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NftDescription
