import React from 'react'

import { NFTDescription, NFTTabs, NftDetailsImg } from './index'
import Style from './NFTDetailsPage.module.css'
const NftDetailsPage = ({ nft }) => {
    return (
        <div className={Style.NftDetailsPage}>
            <div className={Style.NftDetailsPage_box}>
                <NftDetailsImg  nft={nft}/>
                <NFTDescription nft={nft}/>
            </div>
        </div>
    )
}
export default NftDetailsPage
