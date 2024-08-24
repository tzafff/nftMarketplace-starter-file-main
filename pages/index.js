import React, {useContext, useEffect, useState} from "react";
import Style from '../styles/index.module.css'
import {
  HeroSection,
  Service,
  BigNftSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NftCard,
  Collection,
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
  Video,
  Loader
} from '../components/index'
import {NFTMarketPlaceContext} from "../Context/NFTMarketPlaceContext";
const index = () => {

  const { checkIfWalletIsConnected } = useContext(NFTMarketPlaceContext)

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const {fetchNFTs} = useContext(NFTMarketPlaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    fetchNFTs().then((item) => {
      setNfts(item?.reverse())
      setNftsCopy(item)
      console.log(item)
    })
  }, []);



  return <div className={Style.homePage}>
    <HeroSection />
    <Service />
    <BigNftSlider />
    <Title
        heading={"Audio Collection"}
        paragraph={"Discover the most outstanding NFTs in all topics of life."}
    />
    <AudioLive />
    <FollowerTab />
    <Slider />
    <Collection />
    <Title
        heading={"Featured NFTs"}
        paragraph={"Discover the most outstanding NFTs in all topics of life."}
    />
    <Filter />
    {nfts.length === 0 ? <Loader /> : <NftCard NFTData={nfts}/>}

    <Title
        heading={"Browse by Category"}
        paragraph={"Explore the NFTs in the most featured categories"}
    />
    <Category />
    <Subscribe />
    <Brand />
    <Video />

  </div>;
};

export default index;
