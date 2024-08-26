import React from 'react'
import Image from "next/image";

import images from '../../img'
import Style from './LikeProfile.module.css'
const LikeProfile = () => {

    const imageArray = [images.rapper4, images.rapper4, images.rapper4, images.rapper4]
    return (
        <div className={Style.like}>
            {imageArray.map((el, i) => (
                <div className={Style.like_box} key={i+1}>
                    <Image
                        src={el}
                        width={15}
                        height={15}
                        className={Style.like_box_img}
                    />
                </div>
            ))}
        </div>
    )
}
export default LikeProfile
