import React from 'react'
import Image from "next/image";

import Style from './NFTTabs.module.css'
const NftTabs = ({ dataTab, icon }) => {
    return (
        <div className={Style.NftTabs}>
            {dataTab.map((el, i) => (
                <div className={Style.NftTabs_box} key={i + 1}>
                    <Image
                        src={el}
                        alt={"profile image"}
                        width={40}
                        height={40}
                        className={Style.NftTabs_box_img}
                    />
                    <div className={Style.NftTabs_box_info}>
                        <span>
                            Offer $770 By <span>Tzaff</span>{icon}
                        </span>

                        <small>Jun 14 - 4:12 PM</small>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default NftTabs
