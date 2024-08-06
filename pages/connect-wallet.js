import React,{useState, useEffect} from 'react'
import Image from "next/image";

import Style from '../styles/connect-wallet.module.css';
import images from '../img'
import walletconnect from "../img/walletconnect.png";
const ConnectWallet = () => {

    const [activeBtn, setActiveBtn] = useState(1);
    const providerArray = [
        {
            provider: images.metamask,
            name: "Metamask"
        },
        {
            provider: images.walletconnect,
            name: "Wallet Connect"
        },
        {
            provider: images.coinbase,
            name: "CoinBase Wallet"
        },
    ]

    return (
        <div className={Style.connectWallet}>
            <div className={Style.connectWallet_box}>
                <h1>Connect your Wallet</h1>
                <p className={Style.connectWallet_box_para}>
                    Connect with one of our available wallet providers or create a new one
                </p>

                <div className={Style.connectWallet_box_provider}>
                    {providerArray.map((el, i) => (
                        <div
                            className={`${Style.connectWallet_box_provider_item} 
                                ${activeBtn === i + 1 ? Style.active : ""}`
                            }
                            key={i + 1}
                            onClick={() => setActiveBtn(i + 1)}
                        >
                            <Image
                                src={el.provider}
                                alt={el.name}
                                width={50}
                                height={50}
                                className={Style.connectWallet_box_provider_item_img}
                            />
                            <p>{el.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ConnectWallet
