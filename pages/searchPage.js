import React from 'react'
import {Slider, Brand} from '../components/index'
import { SearchBar } from '../searchPage/index'
import { Filter } from '../components/index'
import {NFTCardTwo, Banner} from '../collectionPage/index'
import Style from '../styles/searchPage.module.css'
import images from '../img'
const SearchPage = () => {

    const collectionArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_3,
        images.nft_image_2,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
    ]

    return (
        <div className={Style.searchPage}>
            <Banner bannerImage={images.creatorbackground2}/>
            <SearchBar />
            <Filter />
            <NFTCardTwo NFTData={collectionArray}/>
            <Slider />
            <Brand />
        </div>
    )
}
export default SearchPage
