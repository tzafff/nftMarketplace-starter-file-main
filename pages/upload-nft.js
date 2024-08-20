import React,{ useState, useEffect, useContext} from 'react'

import Style from '../styles/upload-nft.module.css'
import {UploadNFTComp, DropZone} from '../uploadNFT/index'

import { NFTMarketPlaceContext } from '../Context/NFTMarketPlaceContext'


const UploadNft = () => {
    const { uploadToIpfs, createNFT } = useContext(NFTMarketPlaceContext)

    return (
        <div className={Style.uploadNFT}>
            <div className={Style.uploadNFT_box}>
                <div className={Style.uploadNFT_box_heading}>
                    <h1>Create New NFT</h1>
                    <p>You can set preferred display name, create your profile URL and manage other personal settings.</p>

                </div>

                <div className={Style.uploadNFT_box_title}>
                    <h2>Image, Video, Audio, or 3D Model</h2>
                    <p>
                        File types supported: JPG, PNG, GIF, SVG, MP4, WEBM,
                        GLB, GLTF. Max size 100mb
                    </p>
                </div>

                <div className={Style.uploadNFT_box_form}>
                    <UploadNFTComp uploadToIpfs={uploadToIpfs}  createNFT={createNFT}/>
                </div>
            </div>
        </div>
    )
}
export default UploadNft
