import React from 'react'

import { Button, Category, Brand } from '../components/index'
import NFTDetailsPage from "../nftDetailsPage/NFTDetailsPage";
import Style from '../styles/nft-details.module.css'
const NftDetails = () => {
    return (
        <div>
            <NFTDetailsPage />
            <Category />
            <Brand />
        </div>
    )
}
export default NftDetails
