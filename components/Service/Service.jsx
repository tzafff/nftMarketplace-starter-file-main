import React from 'react';
import Style from './Service.module.css';
import images from '../../img';
import Image from 'next/image';

const Service = () => {
    return (
        <div className={Style.service}>
            <div className={Style.service_box}>
                <div >
                    <Image src={images.service1} alt="Filter" width={100} height={100} />
                    <div className={Style.service_box_item_step}>
                        <span>Step 1</span>
                        <h3>Filter & Discover</h3>
                        <p>Connect with wallet, discover, buy NFTs, sell your NFTs and earn money</p>
                    </div>
                </div>
                <div >
                    <Image src={images.service2} alt="Filter" width={100} height={100} />
                    <div className={Style.service_box_item_step}>
                        <span>Step 2</span>
                        <h3>Connect Wallet</h3>
                        <p>Connect with wallet, discover, buy NFTs, sell your NFTs and earn money</p>
                    </div>
                </div>
                <div >
                    <Image src={images.service3} alt="Filter" width={100} height={100} />
                    <div className={Style.service_box_item_step}>
                        <span>Step 3</span>
                        <h3>Start Trading</h3>
                        <p>Connect with wallet, discover, buy NFTs, sell your NFTs and earn money</p>
                    </div>
                </div>
                <div >
                  <Image src={images.service4} alt="Filter" width={100} height={100} />
                  <div className={Style.service_box_item_step}>
                    <span>Step 4</span>
                    <h3>Earn Crypto</h3>
                    <p>Connect with wallet, discover, buy NFTs, sell your NFTs and earn money</p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Service;