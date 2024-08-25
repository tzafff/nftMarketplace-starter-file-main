
import Image from "next/image";
import {FaUserAlt, FaRegImage, FaUserEdit} from "react-icons/fa";
import {MdHelpCenter} from "react-icons/md";
import {TbDownloadOff, TbDownload} from "react-icons/tb";
import { FcAbout } from "react-icons/fc";
import Link from 'next/link'
import { FaWallet } from "react-icons/fa";

import Style from './Profile.module.css'
import images from '../../../img'


const Profile = ({currentAccount}) => {

    return (
        <div className={Style.profile}>
            <div className={Style.profile_account}>
                <FaWallet/>
                {/*<Image*/}
                {/*    src={images.rapper4}*/}
                {/*    alt="user profile"*/}
                {/*    width={50}*/}
                {/*    height={50}*/}
                {/*    className={Style.profile_account_img}*/}
                {/*/>*/}

                <div className={Style.profile_account_info}>
                    <p>{" "}  </p>
                    <small>{`${currentAccount.slice(0, 5)}...${currentAccount.slice(-5)}`}</small>
                </div>
            </div>

            <div className={Style.profile_menu}>
                <div className={Style.profile_menu_one}>
                    <div className={Style.profile_menu_one_item}>
                        <FaUserAlt />
                        <p>
                            <Link href={{pathname: '/author'}}> My Profile</Link>
                        </p>
                    </div>
                    {/*<div className={Style.profile_menu_one_item}>*/}
                    {/*    <FaRegImage />*/}
                    {/*    <p>*/}
                    {/*        <Link href={{pathname: '/author'}}> My Items</Link>*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    <div className={Style.profile_menu_one_item}>
                        <FaUserEdit />
                        <p>
                            <Link href={{pathname: '/account'}}> Edit Profile</Link>
                        </p>
                    </div>
                </div>

                <div className={Style.profile_menu_two}>
                    {/*<div className={Style.profile_menu_one_item}>*/}
                    {/*    <MdHelpCenter/>*/}
                    {/*    <p>*/}
                    {/*        <Link href={{pathname: '/contact-us'}}>Help</Link>*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    <div className={Style.profile_menu_one_item}>
                        <MdHelpCenter/>
                        <p>
                            <Link href={{pathname: '/about-us'}}>About Us</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile
