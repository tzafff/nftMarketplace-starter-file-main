import React from 'react';
import Image from "next/image";

import { Brand } from '../components/index';
import images from '../img';
import Style from '../styles/about-us.module.css';

const AboutUs = () => {

    const founderArray = [
        {
            name: "Chris Tzaff",
            position: "CEO and Developer",
            image: images.rapper4
        },
        {
            name: "Tony M",
            position: "Co-Founder and Chief Executive",
            image: images.rapper5
        },
        {
            name: "Strai",
            position: "Co-Founder and Chairman",
            image: images.rapper6
        },
        {
            name: "Eftimis",
            position: "Co-Founder and Chief Strategy Officer",
            image: images.rapper3
        },
    ];

    const factsArray = [
        {
            title: "10 million",
            info: "Articles published globally (as of September 30, 2021)"
        },
        {
            title: "100,000",
            info: "Registered user accounts (as of September 30, 2021)"
        },
        {
            title: "220+",
            info: "Countries and regions where we have a presence (as of September 30, 2021)"
        },
    ];

    return (
        <div className={Style.aboutus}>
            <div className={Style.aboutus_box}>
                <div className={Style.aboutus_box_hero}>
                    <div className={Style.aboutus_box_hero_left}>
                        <h1>👋 About Us</h1>
                        <p>We are a dedicated team creating high-quality programs and content that inform, educate, and engage audiences worldwide.</p>
                    </div>
                    <div className={Style.aboutus_box_hero_right}>
                        <Image
                            src={images.hero}
                            alt="About Us Hero Image"
                            width={800}
                            height={600}
                        />
                    </div>
                </div>

                <div className={Style.aboutus_box_title}>
                    <h2>🔰 Our Team</h2>
                    <p>Meet the dedicated professionals behind our innovative programs and content.</p>
                </div>

                <div className={Style.aboutus_box_founder}>
                    <div className={Style.aboutus_box_founder_box}>
                        {founderArray.map((founder, i) => (
                            <div key={i} className={Style.aboutus_box_founder_box_img}>
                                <Image
                                    src={founder.image}
                                    alt={founder.name}
                                    width={500}
                                    height={500}
                                    className={Style.aboutus_box_founder_box_img_img}
                                />
                                <h3>{founder.name}</h3>
                                <p>{founder.position}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={Style.aboutus_box_title}>
                    <h2>🚀 Fast Facts</h2>
                    <p>Key metrics that reflect our global impact and presence.</p>
                </div>

                <div className={Style.aboutus_box_facts}>
                    <div className={Style.aboutus_box_facts_box}>
                        {factsArray.map((fact, i) => (
                            <div key={i} className={Style.aboutus_box_facts_box_info}>
                                <h3>{fact.title}</h3>
                                <p>{fact.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Brand />
        </div>
    );
};

export default AboutUs;
