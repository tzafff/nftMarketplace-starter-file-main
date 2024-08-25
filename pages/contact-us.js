import React from 'react';

import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
} from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import formStyle from '../accountPage/Form/Form.module.css';
import { Button } from '../components/index';
import { CiPhone } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
import Style from '../styles/contact-us.module.css';

const ContactUs = () => {
    return (
        <div className={Style.contactus}>
            <div className={Style.contactus_box}>
                <h1>Contact Us</h1>
                <div className={Style.contactus_box_box}>
                    <div className={Style.contactus_box_box_left}>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3><CiHome /> Address</h3>
                            <p>1234 Sunset Boulevard, Suite 567<br />Los Angeles, CA 90026</p>
                        </div>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3><MdOutlineEmail /> Email</h3>
                            <p>contact@ourcompany.com</p>
                        </div>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3><CiPhone /> Phone</h3>
                            <p>(555) 123-4567</p>
                        </div>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3><IoShareSocial /> Follow Us</h3>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <TiSocialFacebook />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <TiSocialInstagram />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <TiSocialTwitter />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <TiSocialLinkedin />
                            </a>
                        </div>
                    </div>
                    <div className={Style.contactus_box_box_right}>
                        <form>
                            <div className={formStyle.Form_box_input}>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className={formStyle.Form_box_input_userName}
                                />
                            </div>

                            <div className={formStyle.Form_box_input}>
                                <label htmlFor="email">Email</label>
                                <div className={formStyle.Form_box_input_box}>
                                    <div className={formStyle.Form_box_input_box_icon}>
                                        <HiOutlineMail />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>

                            <div className={formStyle.Form_box_input}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    cols="30"
                                    rows="6"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <Button btnName="Send Message" handleClick={() => {}} classStyle={Style.button} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
