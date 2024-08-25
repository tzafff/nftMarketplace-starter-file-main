import React from 'react'

import Subscriptions from "../subscriptions/Subscriptions";
import Style from '../styles/subscription.module.css'

const Subscription = () => {
    const subscriptionArray = [
        {
            plan: "STARTER",
            price: "$5/month",
            popular: "Popular",
            service: ["Automated Reporting", "Faster Processing", "Basic Customizations"],
            info: "An entry-level plan designed for individuals and small teams looking for essential features."
        },
        {
            plan: "BASIC",
            price: "$15/month",
            popular: "Most Popular",
            service: ["Priority Support", "Advanced Analytics", "Team Collaboration"],
            info: "A well-rounded plan that enhances productivity with advanced features and team support."
        },
        {
            plan: "PRO",
            price: "$30/month",
            popular: "Best Value",
            service: ["Dedicated Account Manager", "Unlimited Customizations", "24/7 Support"],
            info: "A premium plan offering extensive features and personalized support for larger organizations."
        }
    ];


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