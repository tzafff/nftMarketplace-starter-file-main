import React from 'react'
import Image from "next/image";
import {Button} from '../../components/index'

import Style from './Brand.module.css'
import images from '../../img'

const Brand = () => {
    return (
        <div className={Style.Brand}>
            <div className={Style.Brand_box}>
                <div className={Style.Brand_box_left}>
                    <Image
                        src={images.logo}
                        alt="logo"
                        width={100}
                        height={100}
                    />
                    <h1>Empowering Creators & Collectors</h1>
                    <p>Join MetaMint, a vibrant marketplace where creativity meets opportunity. Discover, trade, and grow your collection with us.</p>

                    <div className={Style.Brand_box_left_btn}>
                        <Button btnName={"Create"} handleClick={() => {}} link={"/upload-nft"}/>
                        <Button btnName={"Discover"} handleClick={() => {}} link={"/searchPage"}/>
                    </div>
                </div>
                <div className={Style.Brand_box_right}>
                    <Image
                        src={images.earn}
                        alt="brand logo"
                        width={800}
                        height={600}
                    />
                </div>
            </div>
        </div>
    )
}
export default Brand
