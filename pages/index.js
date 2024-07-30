import React from "react";
import Style from '../styles/index.module.css'
import {HeroSection, Service, BigNftSlider, Subscribe, Title} from '../components/index'
const index = () => {
  return <div className={Style.homePage}>
    <HeroSection />
    <Service />
    <BigNftSlider />
    <Title
        heading={"Browse by Category"}
        paragraph={"Explore the NFTs in the most featured categories"}
    />
    <Subscribe />
  </div>;
};

export default index;
