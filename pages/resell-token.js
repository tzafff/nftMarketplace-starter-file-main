import React,{useState,useEffect,useContext} from 'react'
import {useRouter} from "next/router";
import axios from "axios";

import Style from '../styles/resell-token.module.css'
import formStyle from '../accountPage/Form/Form.module.css'
import {Button} from '../components/index'

import {NFTMarketPlaceContext} from '../Context/NFTMarketPlaceContext'
import Image from "next/image";

const ResellToken = () => {

    const { createSale } = useContext(NFTMarketPlaceContext)
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const router = useRouter();
    const {id, tokenURI} = router.query;

    const fetchNFT = async () => {
        if(!tokenURI) return;

        const {data} = await axios.get(tokenURI);
        setImage(data.image)
    }

    useEffect(() => {
        fetchNFT()
    }, [id]);

    const resell = async () => {
        try{
            
        } catch (error) {
            console.log("Error while listing " + error)

        }
        await createSale(tokenURI, price, true, id);
        router.push("/author")
    }

    return (
        <div className={Style.reSellToken}>
            <div className={Style.reSellToken_box}>
                <h1>List Your NFT</h1>
                <div className={formStyle.Form_box_input}>
                    <label htmlFor="name">Price</label>
                    <input
                        type={"number"}
                        min={0.0001}
                        placeholder={"Price"}
                        className={formStyle.Form_box_input_userName}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className={Style.reSellToken_box_image}>
                    {image && (
                            <Image src={image} alt={"resell nft"} width={400} height={400} />
                        )
                    }
                </div>

                <div className={Style.reSellToken_box_btn}>
                    <Button btnName={"List NFT"} handleClick={resell} />
                </div>
            </div>
        </div>
    )
}
export default ResellToken
