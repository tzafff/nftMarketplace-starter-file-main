import React from 'react'

import { NFTDescription, NFTTabs, NftDetailsImg } from './index'
import Style from './NFTDetailsPage.module.css'
const NftDetailsPage = () => {
    return (
        <div className={Style.NftDetailsPage}>
            <div className={Style.NftDetailsPage_box}>
                <NftDetailsImg />
                <NFTDescription />
            </div>
        </div>
    )
}
export default NftDetailsPage
