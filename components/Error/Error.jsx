import React,{useState, useEffect, useContext} from 'react'
import Image from 'next/image'
import {NFTMarketPlaceContext} from '../../Context/NFTMarketPlaceContext'

import images from '../../img'
import Style from './Error.module.css'
const Error = () => {

     const { error, setOpenError } = useContext(NFTMarketPlaceContext)

    return (
        <div className={Style.Error} onClick={() => setOpenError(false)}>
            <div className={Style.Error_box}>
                <div className={Style.Error_box_info}>
                    <Image
                        src={images.error2}
                        alt={"error"}
                        width={200}
                        height={200}
                        objectFit={"cover"}
                        className={Style.Error_box_info_img}
                    />
                    <p>{error}</p>
                </div>
            </div>
        </div>
    );
}
export default Error
