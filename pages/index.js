import React from "react";
import Style from '../styles/index.module.css'
import {HeroSection, Service, BigNftSlider} from '../components/index'
const index = () => {
  return <div className={Style.homePage}>
    <HeroSection />
    <Service />
    <BigNftSlider />
  </div>;
};

export default index;
