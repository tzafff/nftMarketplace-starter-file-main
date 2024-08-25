import React from 'react';
import Style from './Service.module.css';
import images from '../../img';
import Image from 'next/image';

const Service = () => {
    return (
        <div className={Style.service}>
            <div className={Style.service_box}>
                <div>
                    <Image src={images.service1} alt="Filter NFTs" width={100} height={100} />
                    <div className={Style.service_box_item_step}>
                        <span>Step 1</span>
                        <h3>Discover Unique NFTs</h3>
                        <p>Use advanced filters to find exclusive NFTs across various categories that match your interests.</p>
                    </div>
                </div>
                <div>
                    <Image src={images.service2} alt="Connect Wallet" width={100} height={100} />
                    <div className={Style.service_box_item_step}>
                        <span>Step 2</span>
                        <h3>Securely Connect Your Wallet</h3>
                        <p>Link your wallet to start buying, selling, and managing your NFT collection with confidence.</p>
                    </div>
                </div>
                <div>
                    <Image src={images.service3} alt="Start Trading" width={100} height={100} />
                    <div className={Style.service_box_item_step}>
                        <span>Step 3</span>
                        <h3>Trade Effortlessly</h3>
                        <p>Engage in seamless trading—buy, sell, and exchange NFTs within our vibrant community.</p>
                    </div>
                </div>
                <div>
                    <Image src={images.service4} alt="Earn Crypto" width={100} height={100} />
                    <div className={Style.service_box_item_step}>
                        <span>Step 4</span>
                        <h3>Earn & Grow</h3>
                        <p>Capitalize on your investments and watch your crypto portfolio grow as you trade NFTs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
