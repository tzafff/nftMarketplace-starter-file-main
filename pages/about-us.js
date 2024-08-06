import React from 'react'
import Image from "next/image";

import { Brand } from '../components/index'
import images from '../img'
import Style from '../styles/about-us.module.css'
const AboutUs = () => {

    const founderArray = [
        {
            name:"Chris Tzaff",
            position: "CEO and Developer",
            images: images.user1

        },
        {
            name:"Tony M",
            position: "Co-Founder and Chief Executive",
            images: images.user2
        },
        {
            name:"Strai",
            position: "Co-Founder, ChairMan",
            images: images.user3
        },
        {
            name:"Eftimis",
            position: "Co-Founder, Chief Strategy Officer",
            images: images.user4
        },
    ]
    const factsArray = [
        {
            title: "10 million",
            info:"Articles have been public around the world (As of sept. 30,2021)"
        },
        {
            title: "100,000",
            info:"Registered users account (As of sept. 30,2021)"
        },
        {
            title: "220+",
            info:"Countries and regions have our presence (As of sept. 30,2021)"
        },
    ]

    return (
        <div className={Style.aboutus}>
            <div className={Style.aboutus_box}>
                <div className={Style.aboutus_box_hero}>
                    <div className={Style.aboutus_box_hero_left}>
                        <h1>👋 About us</h1>
                        <p>We are impartial, independent and every day we create distinctive,
                        world-class programs and content which inform, educate and
                        entertain millions of people in the around the world</p>
                    </div>
                    <div className={Style.aboutus_box_hero_right}>
                        <Image
                            src={images.hero}
                        />
                    </div>
                </div>

                <div className={Style.aboutus_box_title}>
                    <h2>🔰 TEAM</h2>
                    <p>We are impartial, independent and every day we create distinctive,
                        world-class programs and content</p>
                </div>

                <div className={Style.aboutus_box_founder}>
                    <div className={Style.aboutus_box_founder_box}>
                        {founderArray.map((el, i) => (
                            <div className={Style.aboutus_box_founder_box_img}>
                                <Image
                                    src={el.images}
                                    alt={el.name}
                                    width={500}
                                    height={500}
                                    className={Style.aboutus_box_founder_box_img_img}
                                />
                                <h3>{el.name}</h3>
                                <p>{el.position}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={Style.aboutus_box_title}>
                    <h2>🚀 Fast Facts</h2>
                    <p>We are impartial, independent and every day we create distinctive,
                        world-class programs and content</p>
                </div>

                <div className={Style.aboutus_box_facts}>
                    <div className={Style.aboutus_box_facts_box}>
                        {factsArray.map((el, i) => (
                            <div className={Style.aboutus_box_facts_box_info}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Brand />
        </div>
    )
}
export default AboutUs
