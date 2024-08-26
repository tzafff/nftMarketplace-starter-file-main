import React,{useState} from 'react'


import Style from './AuthorNFTCardBox.module.css'
import images from '../../img'
import {NFTCardTwo} from '../../collectionPage/index'
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";
const AuthorNftCardBox = ({ collectibles, created, like, follower, following, nfts, myNFTs }) => {

    const collectiblesArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_3,
        images.nft_image_2,
        images.nft_image_1,
    ]

    const createdArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_2,
    ]

    const likeArray = [
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,

    ]

    const followerArray = [
        {
            background: images.creatorbackground1,
            user: images.rapper4,
            seller: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        },
        {
            background: images.creatorbackground2,
            user: images.rapper4,
            seller: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        },
        {
            background: images.creatorbackground3,
            user: images.rapper4,
            seller: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        },
        {
            background: images.creatorbackground4,
            user: images.rapper4,
            seller: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        },
        {
            background: images.creatorbackground5,
            user: images.rapper4,
            seller: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        },
        {
            background: images.creatorbackground6,
            user: images.rapper4,
            seller: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        },
    ]

    const followingArray = [
        {
            background: images.creatorbackground1,
            user: images.rapper4,
            seller: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        },
        {
            background: images.creatorbackground2,
            user: images.rapper4,
            seller: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        },
        {
            background: images.creatorbackground3,
            user: images.rapper4,
            seller: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        },
    ]

    return (
        <div className={Style.AuthorNftCardBox}>
            { collectibles && <NFTCardTwo NFTData={nfts}/> }
            { created && <NFTCardTwo  NFTData={myNFTs}/> }
            { like && <NFTCardTwo NFTData={nfts}/> }
            {/*TODO MAYBE NEEDS KEY IN THE MAP??*/}
            {follower && (
                <div className={Style.AuthorNftCardBox_box}>
                    {followerArray.map((el, i) => (
                        <FollowerTabCard i={i} el={el} />
                    ))}
                </div>
            )}
            {following && (
                <div className={Style.AuthorNftCardBox_box}>
                    {followingArray.map((el, i) => (
                        <FollowerTabCard i={i} el={el} />
                    ))}
                </div>
            )}
        </div>
    )
}
export default AuthorNftCardBox
