import React,{useState, useEffect, useContext} from 'react'
import Image from "next/image";

import Style from './HeroSection.module.css'
import {Button} from '../index'
import images from '../../img'

import {NFTMarketPlaceContext} from '../../Context/NFTMarketPlaceContext'
import Link from "next/link";

const HeroSection = () => {

    const { titleData } = useContext(NFTMarketPlaceContext);
    return (
        <div className={Style.heroSection}>
            <div className={Style.heroSection_box}>
                <div className={Style.heroSection_box_left}>
                    <h1>{titleData} 🖼️</h1>
                    <p>
                        Explore and trade unique NFTs across all your favorite categories.
                    </p>
                    {/*<Button btnName="Start Exploring Now" link={"/searchPage"}/>*/}
                    <Button btnName="Start Exploring Now" handleClick={() => { }} link="/searchPage" />
                </div>
                <div className={Style.heroSection_box_right}>
                    <Image src={images.hero} alt="hero section" width={600} height={600} />
                </div>
            </div>
        </div>
    )
}
export default HeroSection
