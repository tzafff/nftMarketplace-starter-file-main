import React, {useContext, useEffect, useState} from 'react'
import {Slider, Brand, Loader} from '../components/index'
import {SearchBar} from '../searchPage/index'
import {Filter} from '../components/index'
import {NFTCardTwo, Banner} from '../collectionPage/index'
import Style from '../styles/searchPage.module.css'
import images from '../img'

import {NFTMarketPlaceContext} from '../Context/NFTMarketPlaceContext'

const SearchPage = () => {

    const {fetchNFTs, setError} = useContext(NFTMarketPlaceContext);
    const [nfts, setNfts] = useState([]);
    const [nftsCopy, setNftsCopy] = useState([]);

    useEffect(() => {
        try {
            fetchNFTs().then((item) => {
                setNfts(item?.reverse())
                setNftsCopy(item)
                console.log(item)
            })
        } catch (error) {
            setError("Failed to fetch your NFTs or listed NFTs. Please try again.");
        }

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
            {nfts.length === 0 ? <Loader /> : <NFTCardTwo NFTData={nfts}/>}

            {/*<Slider/>*/}
            <Brand/>
        </div>
    )
}
export default SearchPage
