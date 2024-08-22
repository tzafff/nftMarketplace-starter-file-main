import React, {useContext, useEffect, useState} from 'react'
import {Slider, Brand} from '../components/index'
import {SearchBar} from '../searchPage/index'
import {Filter} from '../components/index'
import {NFTCardTwo, Banner} from '../collectionPage/index'
import Style from '../styles/searchPage.module.css'
import images from '../img'

import {NFTMarketPlaceContext} from '../Context/NFTMarketPlaceContext'

const SearchPage = () => {

    const {fetchNFTs} = useContext(NFTMarketPlaceContext);
    const [nfts, setNfts] = useState([]);
    const [nftsCopy, setNftsCopy] = useState([]);

    useEffect(() => {
        fetchNFTs().then((item) => {
            setNfts(item?.reverse())
            setNftsCopy(item)
            console.log(item)
        })
    }, []);

    const onHandleSearch = (value) => {
        const filteredNFTs = nfts?.filter(({name}) => name.toLowerCase().includes(value))

        if(filteredNFTs.length === 0) {
            setNfts(nftsCopy)
        } else {
            setNfts(filteredNFTs)
        }
    }

    const onClearSearch = () => {
        if(nfts.length && nftsCopy.length) {
            setNfts(nftsCopy)
        }
    }



    return (
        <div className={Style.searchPage}>
            <Banner bannerImage={images.creatorbackground2}/>
            <SearchBar
                onHandleSearch={onHandleSearch}
                onClearSearch={onClearSearch}
            />
            <Filter/>
            <NFTCardTwo NFTData={nfts}/>
            <Slider/>
            <Brand/>
        </div>
    )
}
export default SearchPage
