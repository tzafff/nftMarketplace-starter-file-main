import React, {useContext, useState} from 'react'
import Image from "next/image";
import {
    MdVerified,
    MdCloudUpload,
    MdOutlineReportProblem
} from "react-icons/md";
import{ FiCopy } from "react-icons/fi";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialInstagram,
    TiSocialYoutube
} from "react-icons/ti";
import {BsThreeDots} from "react-icons/bs";

import Style from './AuthorProfileCard.module.css'
import images from '../../img'
import {Button} from '../../components/index'
import {NFTMarketPlaceContext} from "../../Context/NFTMarketPlaceContext";


const AuthorProfileCard = ({account}) => {

    const { currentAccount } = useContext(NFTMarketPlaceContext)
    const [share, setShare] = useState(false);
    const [report, setReport] = useState(false);

    const copyAddress = () => {
        navigator.clipboard.writeText(currentAccount)
            .then(() => {
                console.log('Address copied to clipboard');
            })
            .catch(err => {
                console.error('Failed to copy address: ', err);
            });
    };


    const openShare = () => {
        if(!share){
            setShare(true)
            setReport(false)
        } else {
            setShare(false)
        }
    }

    const openReport = () => {
        if(!report){
            setReport(true)
            setShare(false)
        } else {
            setReport(false)
        }
    }

    return (
        <div className={Style.AuthorProfileCard}>
            <div className={Style.AuthorProfileCard_box}>
                <div className={Style.AuthorProfileCard_box_img}>
                    <Image
                        src={images.nft_image_1}
                        className={Style.AuthorProfileCard_box_img_img}
                        alt={"nft image"}
                        width={220}
                        height={220}
                    />
                </div>

                <div className={Style.AuthorProfileCard_box_info}>
                    <h2>{`${currentAccount.slice(0, 5)}...${currentAccount.slice(-5)}`}{""}{" "}
                        <span>
                            <MdVerified/>
                        </span>{" "}
                    </h2>

                    <div className={Style.AuthorProfileCard_box_info_address}>
                        <input
                            type={"text"}
                            value={"Copy Address"}
                            id={"myInput"}
                            readOnly
                        />
                        <FiCopy
                            onClick={() => copyAddress()}
                            className={Style.AuthorProfileCard_box_info_address_icon}
                        />
                    </div>

                    <p>
                        #Punk #4567 / an OG Cryptopunk Collector, hoarder of NFTs.
                        Contributing to ether_cards, an NFT Monetization Platform.
                    </p>

                    <div className={Style.AuthorProfileCard_box_info_social}>
                        <a href={"#"}>
                            <TiSocialFacebook />
                        </a>
                        <a href={"#"}>
                            <TiSocialInstagram />
                        </a>
                        <a href={"#"}>
                            <TiSocialYoutube/>
                        </a>
                        <a href={"#"}>
                            <TiSocialLinkedin />
                        </a>
                    </div>
                </div>

                {/*<div className={Style.AuthorProfileCard_box_share}>*/}
                {/*    <Button btnName="Folow" handleClick={() => {}} />*/}
                {/*    <MdCloudUpload*/}
                {/*        onClick={() => openShare()}*/}
                {/*        className={Style.AuthorProfileCard_box_share_icon}*/}
                {/*    />*/}

                {/*    {share && (*/}
                {/*        <div className={Style.AuthorProfileCard_box_share_upload}>*/}
                {/*            <p>*/}
                {/*                <span>*/}
                {/*                    <TiSocialFacebook/>*/}
                {/*                </span>{""}*/}
                {/*                FaceBook*/}
                {/*            </p>*/}
                {/*            <p>*/}
                {/*                <span>*/}
                {/*                    <TiSocialInstagram/>*/}
                {/*                </span>{""}*/}
                {/*                Instagram*/}
                {/*            </p>*/}
                {/*            <p>*/}
                {/*                <span>*/}
                {/*                    <TiSocialYoutube/>*/}
                {/*                </span>{""}*/}
                {/*                Youtube*/}
                {/*            </p>*/}
                {/*            <p>*/}
                {/*                <span>*/}
                {/*                    <TiSocialLinkedin/>*/}
                {/*                </span>{""}*/}
                {/*                Linkedin*/}
                {/*            </p>*/}

                {/*        </div>*/}
                {/*    )}*/}

                {/*    <BsThreeDots*/}
                {/*        onClick={() => openReport()}*/}
                {/*        className={Style.AuthorProfileCard_box_share_icon}*/}
                {/*    />*/}
                {/*    {report && (*/}
                {/*        <p className={Style.AuthorProfileCard_box_share_report}>*/}
                {/*            <span>*/}
                {/*                <MdOutlineReportProblem />*/}
                {/*            </span>{""}*/}
                {/*            Report User*/}
                {/*        </p>*/}
                {/*    )}*/}

                {/*</div>*/}
            </div>
        </div>
    )
}
export default AuthorProfileCard
