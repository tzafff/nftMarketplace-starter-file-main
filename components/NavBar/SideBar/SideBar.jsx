import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {GrClose} from "react-icons/gr";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
    TiArrowSortedDown,
    TiArrowSortedUp
} from "react-icons/ti";

import Style from './SideBar.module.css'
import images from '../../../img'
import Button from "../../Button/Button";

const SideBar = ({ setOpenSideMenu, currentAccount, connectWallet }) => {

    const [openDiscover, setOpenDiscover] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);

    // DISCOVER NAVIGATION MENU
    const discover = [
        // {
        //     name: "Collection",
        //     link: "collection",
        // },
        {
            name: "Search NFTs",
            link: "searchPage"
        },
        {
            name: "Creator Profile",
            link: "author"
        },
        // {
        //     name: "NFT Details",
        //     link: "nft-details"
        // },
        {
            name: "Account Settings",
            link: "account"
        },
        {
            name: "Create NFT",
            link: "upload-nft"
        },
        {
            name: "Connect Wallet",
            link: "connect-wallet"
        },
        {
            name: "Blog",
            link: "https://tzaff-blog3.vercel.app/"
        },
    ]

    // HELP CENTER
    const helpCenter = [
        {
            name: "About",
            link: "about-us"
        },
        {
            name: "Contact us",
            link: "contact-us"
        },
        // {
        //     name: "Sign Up",
        //     link: "sign-up"
        // },
        // {
        //     name: "Sign in",
        //     link: "sign-in"
        // },
        {
            name: "Subscription",
            link: "subscription"
        },
    ]

    const openDiscoverMenu = () => {
        if(!openDiscover) {
            setOpenDiscover(true)
        } else {
            setOpenDiscover( false)
        }
    }

    const openHelpMenu = () => {
        if(!openHelp) {
            setOpenHelp(true)
        } else {
            setOpenHelp(false)
        }
    }

    const closeSideBar = () => {
        setOpenSideMenu(false);
    }

    return (
        <div className={Style.sideBar}>
            <GrClose
                className={Style.sideBar_closeBtn}
                onClick={() => closeSideBar()}
            />

            <div className={Style.sideBar_box}>
                <Image src={images.logo2} alt="logo" width={40} height={40} />
                <p>Discover the most outstanding articles on all topics of NFT own stories and share them.</p>
                <div className={Style.sideBar_social}>
                    <a href="#">
                        <TiSocialFacebook />
                    </a>
                    <a href="#">
                        <TiSocialInstagram />
                    </a>
                    <a href="#">
                        <TiSocialLinkedin />
                    </a>
                    <a href="#">
                        <TiSocialTwitter />
                    </a>
                    <a href="#">
                        <TiSocialYoutube />
                    </a>
                </div>
            </div>

            <div className={Style.sideBar_menu}>
                <div>
                    <div className={Style.sideBar_menu_box} onClick={() => openDiscoverMenu()}>
                        <p>Discover</p>
                        <TiArrowSortedDown />
                    </div>

                    {openDiscover && (
                        <div className={Style.sideBar_discover}>
                            {discover.map((el, i) => (
                                <p key={i + 1}>
                                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <div className={Style.sideBar_menu_box} onClick={() => openHelpMenu()}>
                        <p>Help Center</p>
                        <TiArrowSortedDown />
                    </div>
                    {openHelp && (
                        <div className={Style.sideBar_discover}>
                            {helpCenter.map((el, i) => (
                                <p key={i+1}>
                                    <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className={Style.sideBar_button}>
                {
                    currentAccount === "" ?
                        (
                            <Button btnName={"Connect Wallet"} handleClick={() => connectWallet()} />
                        ) : (
                            <Button btnName={"Create"} handleClick={() => {}} link="/upload-nft" />
                        )
                }
                <Button btnName="Connect Wallet" handleClick={() => {}}/>
            </div>
        </div>
    )
}
export default SideBar
