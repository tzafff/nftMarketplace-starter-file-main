import React from "react";
import Style from '../styles/index.module.css'
import {
  HeroSection,
  Service,
  BigNftSlider,
  Subscribe,
  Title,
  Category,
  Filter
} from '../components/index'
const index = () => {
  return <div className={Style.homePage}>
    <HeroSection />
    <Service />
    <BigNftSlider />
    <Title
        heading={"Featured NFTs"}
        paragraph={"Discover the most outstanding NFTs in all topics of life."}
    />
    <Filter />
    <Title
        heading={"Browse by Category"}
        paragraph={"Explore the NFTs in the most featured categories"}
    />
    <Category />
    <Subscribe />
  </div>;
};

export default index;
