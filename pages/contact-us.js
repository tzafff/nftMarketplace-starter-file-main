import React from 'react'

import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
} from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import {HiOutlineMail} from "react-icons/hi";
import formStyle from '../accountPage/Form/Form.module.css'
import {Button} from '../components/index'
import { CiPhone } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
import Style from '../styles/contact-us.module.css'
const ContactUs = () => {
    return (
        <div className={Style.contactus}>
            <div className={Style.contactus_box}>
                <h1>Contact Us</h1>
                <div className={Style.contactus_box_box}>
                    <div className={Style.contactus_box_box_left}>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3><CiHome /> ADDRESS</h3>
                            <p>Athens Greece, 1223  Europe power builing floor 3</p>
                        </div>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3><MdOutlineEmail /> EMAIL</h3>
                            <p>johnDoe@example.com</p>
                        </div>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3><CiPhone /> PHONE</h3>
                            <p>+XX 000-000-000</p>
                        </div>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3><IoShareSocial /> SOCIALS</h3>
                            <a href="#">
                                <TiSocialFacebook/>
                            </a>
                            <a href="#">
                                <TiSocialInstagram/>
                            </a>
                            <a href="#">
                                <TiSocialTwitter/>
                            </a>
                            <a href="#">
                                <TiSocialLinkedin/>
                            </a>
                        </div>
                    </div>
                    <div className={Style.contactus_box_box_right}>
                        <form>
                            <div className={formStyle.Form_box_input}>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type={"text"}
                                    placeholder={"John Doe"}
                                    className={formStyle.Form_box_input_userName}
                                />
                            </div>

                            <div className={formStyle.Form_box_input}>
                                <label htmlFor={"email"}>Email</label>
                                <div className={formStyle.Form_box_input_box}>
                                    <div className={formStyle.Form_box_input_box_icon}>
                                        <HiOutlineMail />
                                    </div>
                                    <input
                                        type={"text"}
                                        placeholder={"email"}
                                    />
                                </div>
                            </div>

                            <div className={formStyle.Form_box_input}>
                                <label htmlFor={"description"}>Message</label>
                                <textarea name={""} id={""} cols="30" rows="6" placeholder={"Something about yourself."}></textarea>
                            </div>

                            <Button btnName={"Send Message"} handleClick={() => {}} classStyle={Style.button} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs
