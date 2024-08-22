import React, {useState, useContext, useEffect} from 'react'
import {useRouter} from "next/router";

import { Button, Category, Brand } from '../components/index'
import NFTDetailsPage from "../nftDetailsPage/NFTDetailsPage";
import Style from '../styles/nft-details.module.css'

import { NFTMarketPlaceContext } from '../Context/NFTMarketPlaceContext'

const NftDetails = () => {

    const { currentAccount } = useContext(NFTMarketPlaceContext);

    const [nft, setNft] = useState({
        image:"",
        tokenId:"",
        name:"",
        owner:"",
        price:"",
        seller:""
    });

    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return;
        setNft(router.query);
    }, [router.isReady]);


    return (
        <div>
            <NFTDetailsPage nft={nft}/>
            <Category />
            <Brand />
        </div>
    )
}
export default NftDetails
