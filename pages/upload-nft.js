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
                    <h1>Create a New NFT</h1>
                    <p>Customize your NFT by setting a display name, generating a unique profile URL, and managing additional personal settings.</p>

                </div>

                <div className={Style.uploadNFT_box_title}>
                    <h2>Supported File Formats</h2>
                    <p>
                        Acceptable formats include JPG, PNG, GIF, SVG, MP4, WEBM, GLB, and GLTF. Maximum file size is 100 MB.
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
