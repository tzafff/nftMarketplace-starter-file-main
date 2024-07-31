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
                    <h1>Earn Free Crypto with Ciscrypt</h1>
                    <p>A creative agency that leand and inspire</p>

                    <div className={Style.Brand_box_left_btn}>
                        <Button btnName={"Create"} handleClick={() => {}} />
                        <Button btnName={"Discover"} handleClick={() => {}} />
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
