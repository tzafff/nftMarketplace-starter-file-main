import React, { useState, useEffect, useCallback} from 'react'
import Image from "next/image";
import {AiFillFire, AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {MdVerified, MdTimer} from "react-icons/md";
import {TbArrowBigLeftLines, TbArrowBigRightLine} from "react-icons/tb";

import Style from './BigNFTSlider.module.css'
import images from '../../img'
import Button from '../Button/Button'
const BigNftSlider = () => {

    const [idNumber, setIdNumber] = useState(1);

    const sliderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "Chris Tzaff",
            collection: "Gym",
            price: "0000006545 ETH",
            like: 243,
            image: images.user1,
            nftImage: images.nft_image_1,
            time: {
                days: 56,
                hours: 50,
                minutes: 72,
                seconds: 56,
            },
        },
        {
            title: "Buddy NFT",
            id: 2,
            name: "Eftimis",
            collection: "Gym",
            price: "0000006545 ETH",
            like: 243,
            image: images.user2,
            nftImage: images.nft_image_2,
            time: {
                days: 67,
                hours: 60,
                minutes: 71,
                seconds: 75,
            }
        },
        {
            title: "Scamm NFT",
            id: 3,
            name: "Scammer ",
            collection: "Gym",
            price: "0000006545 ETH",
            like: 243,
            image: images.user3,
            nftImage: images.nft_image_3,
            time: {
                days: 17,
                hours: 40,
                minutes: 25,
                seconds: 55,
            }
        },
        {
            title: "Phase10 NFT",
            id: 4,
            name: "Phase10 ",
            collection: "Gym",
            price: "0000006545 ETH",
            like: 243,
            image: images.user4,
            nftImage: images.nft_image_1,
            time: {
                days: 17,
                hours: 40,
                minutes: 1,
                seconds: 3,
            }
        }
    ]

    const inc = useCallback(() => {
        if(idNumber + 1 < sliderData.length){
            setIdNumber(idNumber + 1)
        }
    }, [idNumber, sliderData.length])

    const dec = useCallback(() => {
        if(idNumber > 0){
            setIdNumber(idNumber - 1)
        }
    }, [idNumber])

    useEffect(() => {
        inc();
    },[])

    return (
        <div className={Style.bigNFTSlider}>
            <div className={Style.bigNFTSlider_box}>
                <div className={Style.bigNFTSlider_box_left}>
                    <h2>{sliderData[idNumber].title}</h2>
                    <div className={Style.bigNFTSlider_box_left_creator}>
                        <div className={Style.bigNFTSlider_box_left_creator_profile}>
                            <Image
                                src={sliderData[idNumber].image}
                                alt="profile"
                                width={50}
                                height={50}
                                className={Style.bigNFTSlider_box_left_creator_profile_img}
                            />
                            <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
                                <p>Creator</p>
                                <h4>{sliderData[idNumber].name}
                                    <span>
                                        <MdVerified/>
                                    </span>
                                </h4>
                            </div>
                        </div>

                        <div className={Style.bigNFTSlider_box_left_creator_collection}>
                            <AiFillFire
                                className={Style.bigNFTSlider_box_left_creator_collection_icon}
                            />
                            <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                                <p>Collection</p>
                                <h4>{sliderData[idNumber].collection}</h4>
                            </div>
                        </div>
                    </div>


                    <div className={Style.bigNFTSlider_box_left_bidding}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box}>
                            <small>Current Bid</small>
                            <p>
                                {sliderData[idNumber].price}
                                <span>$,221,21</span>
                            </p>
                        </div>

                        <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                            <MdTimer
                                className={Style.bigNFTSlider_box_left_bidding_box_icon}
                            />
                            <span>Auction ending in</span>
                        </p>

                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.days}</p>
                                <span>Days</span>
                            </div>

                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.hours}</p>
                                <span>Hours</span>
                            </div>

                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.minutes}</p>
                                <span>Minutes</span>
                            </div>

                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.seconds}</p>
                                <span>Seconds</span>
                            </div>
                        </div>

                        <div className={Style.bigNFTSlider_box_left_button}>
                            <Button btnName="Place" handleClick={() =>{}}/>
                            <Button btnName="View" handleClick={() =>{}}/>
                        </div>
                    </div>

                    <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                        <TbArrowBigLeftLines
                            className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                            onClick={() => inc()}
                        />
                        <TbArrowBigRightLine
                            className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                            onClick={() => dec()}
                        />
                    </div>
                </div>

                <div className={Style.bigNFTSlider_box_right}>
                    <div className={Style.bigNFTSlider_box_right_box}>
                        <Image
                            src={sliderData[idNumber].nftImage}
                            alt="nft image"
                            className={Style.bigNFTSlider_box_right_img}
                        />

                        <div className={Style.bigNFTSlider_box_right_like}>
                            <AiFillHeart />
                            <span>{sliderData[idNumber].like}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        // <div className={Style.bigNFTSlider}>
        //     <div className={Style.bigNFTSlider_box}>
        //         <div className={Style.bigNFTSlider_box_left}>
        //             <h2>{sliderData[idNumber].title}</h2>
        //             <div className={Style.bigNFTSlider_box_left_creator}>
        //                 <div className={Style.bigNFTSlider_box_left_creator_profile}>
        //                     <Image
        //                         src={sliderData[idNumber].image}
        //                         alt="profile image"
        //                         width={50}
        //                         height={50}
        //                         className={Style.bigNFTSlider_box_left_creator_profile_img}
        //                     />
        //                     <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
        //                         <p>Creator</p>
        //                         <h4>{sliderData[idNumber].name}{" "}
        //                             <span>
        //                                 <MdVerified />
        //                             </span>
        //                         </h4>
        //                     </div>
        //                 </div>
        //                 <div className={Style.bigNFTSlider_box_left_creator_collection}>
        //                     <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon} />
        //                     <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
        //                         <p>Collection</p>
        //                         <h4>{sliderData[idNumber].collection}</h4>
        //                     </div>
        //                 </div>
        //             </div>
        //
        //             <div className={Style.bigNFTSlider_box_left_creator_bidding}>
        //                 <div className={Style.bigNFTSlider_box_left_bidding_box}>
        //                     <small>Current Bid</small>
        //                     <p>
        //                         {sliderData[idNumber].price} <span>$221,21</span>
        //                     </p>
        //                 </div>
        //                 <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
        //                     <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon} />
        //                     <span>Auction ending in</span>
        //                 </p>
        //
        //                 <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
        //                     <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
        //                         <p>{sliderData[idNumber].time.days}</p>
        //                         <span>Days</span>
        //                     </div>
        //                     <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
        //                         <p>{sliderData[idNumber].time.hours}</p>
        //                         <span>Hours</span>
        //                     </div>
        //                     <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
        //                         <p>{sliderData[idNumber].time.minutes}</p>
        //                         <span>Minutes</span>
        //                     </div>
        //                     <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
        //                         <p>{sliderData[idNumber].time.seconds}</p>
        //                         <span>Seconds</span>
        //                     </div>
        //                 </div>
        //
        //                 <div className={Style.bigNFTSlider_box_left_button}>
        //                     <Button btnName="Place" handleClick={() => {}}/>
        //                     <Button btnName="View" handleClick={() => {}}/>
        //                 </div>
        //             </div>
        //
        //             <div className={Style.bigNFTSlider_box_left_sliderBtn}>
        //                 <TbArrowBigLeftLines
        //                     className={Style.bigNFTSlider_box_left_sliderBtn_icon}
        //                     onClick={() => inc()}
        //                 />
        //                 <TbArrowBigRightLine
        //                     className={Style.bigNFTSlider_box_left_sliderBtn_icon}
        //                     onClick={() => dec()}
        //                 />
        //             </div>
        //         </div>
        //
        //         <div className={Style.bigNFTSlider_box_right}>
        //             <div className={Style.bigNFTSlider_box_right_box}>
        //                 <Image
        //                     src={sliderData[idNumber].nftImage}
        //                     alt="nft image"
        //                     className={Style.bigNFTSlider_box_right_box_img}
        //                 />
        //
        //                 <div className={Style.bigNFTSlider_box_right_like}>
        //                     <AiFillHeart/>
        //                     <span>{sliderData[idNumber].like}</span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
export default BigNftSlider
