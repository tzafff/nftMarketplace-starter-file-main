import React from 'react'
import {TiTick} from "react-icons/ti";
import {Button} from '../components/index'
import Style from './Subscriptions.module.css'
const Subscriptions = ({i, el}) => {

    return (
        <div className={Style.SubscriptionBox}>
            <div className={Style.SubscriptionBox_box}>
                <span className={Style.SubscriptionBox_box_span}>{el.plan}</span>
                <small className={Style.SubscriptionBox_box_small}>{el.popular || ""}</small>
                <p className={Style.SubscriptionBox_box_price}>
                    {el.price}
                </p>

                <div className={Style.SubscriptionBox_box_info}>
                    {el.service.map((el, i) => (
                        <p className={Style.SubscriptionBox_box_info_para} key={i + 1}>
                            <span><TiTick /></span>
                            {el}
                        </p>
                    ))}
                </div>
                <Button btnName={"Submit"} handleClick={() => {}} classStyle={Style.button}/>
            </div>
        </div>
    )
}
export default Subscriptions
