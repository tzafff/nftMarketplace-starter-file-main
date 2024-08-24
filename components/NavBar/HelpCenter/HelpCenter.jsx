import React from 'react'
import Link from 'next/link'

import Style from './HelpCenter.module.css'
const HelpCenter = ({closeAllMenus}) => {

    const helpCenter = [
        {
            name: "About",
            link: "about-us"
        },
        {
            name: "Contact us",
            link: "contact-us"
        },
        {
            name: "Sign Up",
            link: "sign-up"
        },
        {
            name: "Sign in",
            link: "sign-in"
        },
        {
            name: "Subscription",
            link: "subscription"
        },
    ]

    return (
        <div className={Style.box}>
            {helpCenter.map((el, i) => (
                <div key={ i + 1 } className={Style.helpCenter}>
                    <Link href={{pathname: `${el.link}`}} >
                        <a onClick={closeAllMenus}>{el.name}</a>
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default HelpCenter
