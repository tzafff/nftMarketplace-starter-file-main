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

  const { checkIfWalletIsConnected, fetchNFTs } = useContext(NFTMarketPlaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [checkIfWalletIsConnected]);

  useEffect(() => {
    const loadNFTs = async () => {
      try {
        const fetchedNFTs = await fetchNFTs();
        if (Array.isArray(fetchedNFTs) && fetchedNFTs.length > 0) {
          setNfts(fetchedNFTs.reverse());
          setNftsCopy(fetchedNFTs);
        } else {
          console.error('No NFTs fetched or data is not in expected format.');
        }
      } catch (error) {
        console.error('Error fetching NFTs:', error.message);
      }
    };
    loadNFTs();
  }, [fetchNFTs]);

  const creators = nfts.length > 0 ? getTopCreators(nfts) : [];



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

    {nfts && nfts.length === 0 ? <Loader /> : <NftCard NFTData={nfts}/>}

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
