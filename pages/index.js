import React from "react";
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
  FollowerTab
} from '../components/index'
const index = () => {
  return <div className={Style.homePage}>
    <HeroSection />
    <Service />
    <BigNftSlider />

    <FollowerTab />
    <Collection />
    <Title
        heading={"Featured NFTs"}
        paragraph={"Discover the most outstanding NFTs in all topics of life."}
    />
    <Filter />
    <NftCard />
    <Title
        heading={"Browse by Category"}
        paragraph={"Explore the NFTs in the most featured categories"}
    />
    <Category />
    <Subscribe />
  </div>;
};

export default index;
