import React, {useState, useEffect} from 'react'
import Image from "next/image";
import {BsImage} from "react-icons/bs";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {TiArrowSortedUp, TiArrowSortedDown} from "react-icons/ti";

import Style from './NFTDetailsImg.module.css'
import images from '../../img'

const NftDetailsImg = () => {
    const [description, setDescription] = useState(true);
    const [details, setDetails] = useState(true);
    const [like, setLike] = useState(false);

    const openDescription = () => {
        if(!description){
            setDescription(true)
        } else {
            setDescription(false)
        }
    }

    const openDetails = () => {
        if(!details) {
            setDetails(true)
        } else {
            setDetails(false)
        }
    }

    const likeNFT = () => {
        if(!like) {
            setLike(true)
        } else {
            setLike(false)
        }
    }

    return (
        <div className={Style.NftDetailsImg}>
            <div className={Style.NftDetailsImg_box}>
                <div className={Style.NftDetailsImg_box_NFT}>
                    <div className={Style.NftDetailsImg_box_NFT_like}>
                        <BsImage className={Style.NftDetailsImg_box_NFT_like_icon} />
                        <p onClick={() => likeNFT()}>
                            {like ? (
                                <AiOutlineHeart
                                    className={Style.NftDetailsImg_box_NFT_like_icon}
                                />
                            ) : (
                                <AiFillHeart
                                    className={Style.NftDetailsImg_box_NFT_like_icon}
                                />
                            )}
                            <span>23</span>
                        </p>
                    </div>

                    <div className={Style.NftDetailsImg_box_NFT_img}>
                        <Image
                            src={images.nft_image_1}
                            className={Style.NftDetailsImg_box_NFT_img_img}
                            alt={"nft image"}
                            width={700}
                            height={800}
                            objectFit={"cover"}
                        />
                    </div>
                </div>

                <div
                    className={Style.NftDetailsImg_box_description}
                    onClick={() => openDescription()}
                >
                    <p>Description</p>
                    {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                </div>

                {description && (
                    <div className={Style.NftDetailsImg_box_description_box}>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                            used to demonstrate the visual form of a document or a typeface without
                            relying on meaningful content.
                            Lorem ipsum may be used as a placeholder before the final copy is available
                        </p>
                    </div>
                )}

                <div className={Style.NftDetailsImg_box_details} onClick={() => openDetails()}>
                    <p>Details</p>
                    {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                </div>

                {details && (
                    <div className={Style.NftDetailsImg_box_details_box}>
                        <small>2000 x 2000 px.IMAGE(685KB)</small>
                        <p>
                            <small>Contract Address</small>
                            <br></br>
                            0x8D85e590D1109CCc55e54A9e495b023E543b521E
                        </p>
                        <p>
                            <small>Token ID</small>
                            1000423498
                        </p>
                    </div>
                )}


            </div>
        </div>
    )
}
export default NftDetailsImg
