import React,{useState, useEffect, useContext} from 'react'

import Style from '../styles/author.module.css'
import { Banner, NFTCardTwo } from '../collectionPage/index'
import { Brand, Title } from '../components/index'
import FollowerTabCard from '../components/FollowerTab/FollowerTabCard/FollowerTabCard'
import {AuthorProfileCard, AuthorTaps, AuthorNftCardBox} from '../authorPage/index'
import images from '../img'

import {NFTMarketPlaceContext} from '../Context/NFTMarketPlaceContext'

const Author = () => {

    const followerArray = [
        {
            background: images.creatorbackground1,
            user: images.user1,
            seller: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        },
        {
            background: images.creatorbackground2,
            user: images.user2,
            seller: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        },
        {
            background: images.creatorbackground3,
            user: images.user3,
            seller: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        },
        {
            background: images.creatorbackground4,
            user: images.user4,
            seller: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        },
        {
            background: images.creatorbackground5,
            user: images.user5,
            seller: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        },
        {
            background: images.creatorbackground6,
            user: images.user6,
            seller: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        },
    ]

    const [collectibles, setCollectibles] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);

    const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(NFTMarketPlaceContext);
    const [nfts, setNfts] = useState([]);
    const [myNfts, setMyNfts] = useState([]);

    useEffect(() => {
        fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
            setNfts(items);
        });
    }, []);

    useEffect(() => {
        fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
            setMyNfts(items);
        });
    }, []);

    return (
        <div className={Style.author}>
            <Banner bannerImage={images.creatorbackground2}/>
            <AuthorProfileCard currentAccount={currentAccount} />
            <AuthorTaps
                setCollectibles={setCollectibles}
                setCreated={setCreated}
                setLike={setLike}
                setFollower={setFollower}
                setFollowing={setFollowing}
            />
            <AuthorNftCardBox
                collectibles={collectibles}
                created={created}
                like={like}
                follower={follower}
                following={following}
                nfts={nfts}
                myNFTs={myNfts}
            />
            <Title
                heading="Popular Creators"
                paragraph="Click on music icon and enjoy NFT music or audio"
            />

            <div className={Style.author_box}>
                {followerArray.map((el, i) => (
                    <FollowerTabCard i={i} el={el}/>
                ))}
            </div>
            <Brand />
        </div>
    )
}
export default Author
