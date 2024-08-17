import React from 'react'

import Subscriptions from "../subscriptions/Subscriptions";
import Style from '../styles/subscription.module.css'

const Subscription = () => {
    const subscriptionArray = [
        {
            plan: "STARTER",
            price: "5$/month",
            popular: "Popular",
            service: ["Automated Reporting", "Faster Processing", "Customizations"],
            info: "Literally you probably havent heard of them jeans shorts"
        },
        {
            plan: "BASIC",
            price: "15$/month",
            popular: "Most Popular",
            service: ["Priority Support", "Advanced Analytics", "Team Collaboration"],
            info: "Elevate your productivity with our Pro plan, designed for growing teams"
        },
        {
            plan: "PRO",
            price: "30$/month",
            popular: "BEST DEAL",
            service: ["Dedicated Account Manager", "Unlimited Customizations", "24/7 Support"],
            info: "Tailored solutions for large organizations with complex needs"
        }
    ]

    return (
        <div className={Style.subscription}>
            <div className={Style.subscription_box}>
                <div className={Style.subscription_box_info}>
                    <h1>💎 Subscription</h1>
                    <p>Pricing to fit the needs of any company size.</p>
                </div>

                <div className={Style.subscription_box_box}>
                    {subscriptionArray.map((el, i) => (
                        <Subscriptions key={i + 1} i={i + 1} el={el}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Subscription;