import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
import Style from './Subscribe.module.css'
import images from '../../img'

const Subscribe = () => {
    return (
        <div className={Style.subscribe}>
            <div className={Style.subscribe_box}>
                <div className={Style.subscribe_box_left}>
                    <h2>Stay Updated</h2>
                    <p>Sign up for our exclusive newsletter to receive updates on upcoming releases and special offers.</p>

                    <div className={Style.subscribe_box_left_box}>
                        <span>01</span>
                        <small>Receive exclusive discounts</small>
                    </div>

                    <div className={Style.subscribe_box_left_box}>
                        <span>02</span>
                        <small>Get access to premium content</small>
                    </div>

                    <div className={Style.subscribe_box_left_input}>
                        <input type="email" placeholder="Enter your email" />
                        <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
                    </div>
                </div>

                <div className={Style.subscribe_box_right}>
                    <Image src={images.update} alt="Stay updated" height={600} width={800} />
                </div>
            </div>
        </div>
    )
}

export default Subscribe
