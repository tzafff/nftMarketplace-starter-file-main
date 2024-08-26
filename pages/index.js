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
  Loader,
  Error
} from '../components/index'
import {NFTMarketPlaceContext} from "../Context/NFTMarketPlaceContext";
import {getTopCreators} from '../TopCreators/TopCreators';

const index = () => {

  const { checkIfWalletIsConnected } = useContext(NFTMarketPlaceContext)

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const {fetchNFTs} = useContext(NFTMarketPlaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  // Creator List
  const creators = getTopCreators(nfts);
  // console.log(creators)


  useEffect(() => {
    fetchNFTs().then((item) => {
      setNfts(item?.reverse())
      setNftsCopy(item)
    })
  }, []);



  return <div className={Style.homePage}>
    <HeroSection />
    <Service />
    <BigNftSlider />
    {/*<Title*/}
    {/*    heading={"Audio Collection"}*/}
    {/*    paragraph={"Discover the most outstanding NFTs in all topics of life."}*/}
    {/*/>*/}
    {/*<AudioLive />*/}
    {creators.length === 0 ? <Loader /> :  <FollowerTab TopCreator={creators}/>}
    {/*<Slider />*/}
    {/*<Collection />*/}
    <Title
        heading={"Featured NFTs"}
        paragraph={""}
    />
    <Filter />

    {nfts.length === 0 ? <Loader /> : <NftCard NFTData={nfts}/>}

    {/*<Title*/}
    {/*    heading={"Browse by Category"}*/}
    {/*    paragraph={"Explore the NFTs in the most featured categories"}*/}
    {/*/>*/}
    {/*<Category />*/}
    <Subscribe />
    <Brand />
    {/*<Video />*/}

  </div>;
};

export default index;
