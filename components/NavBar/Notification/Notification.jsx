import React from 'react'
import Image from 'next/image'

import Style from './Notification.module.css'
import images from '../../../img'
import { GrSystem } from "react-icons/gr";


const Notification = () => {
    return (
        <div className={Style.notification}>
            <p>Notification</p>
            <div className={Style.notification_box}>
                <div className={Style.notification_box_img}>
                    <GrSystem size={30}/>
                </div>
                <div className={Style.notification_box_info}>
                    <h4>System</h4>
                    <p>No notifications...</p>
                </div>
                <span className={Style.notification_box_new}></span>
            </div>
        </div>
    )
}
export default Notification
