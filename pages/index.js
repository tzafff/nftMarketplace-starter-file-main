import React from "react";
import Style from '../styles/index.module.css'
import {HeroSection} from '../components/index'
const index = () => {
  return <div className={Style.homePage}>
    <HeroSection />
  </div>;
};

export default index;
