import React from 'react'

import Style from './Button.module.css'
import Link from "next/link";
const Button = ({ icon, btnName, handleClick, classStyle, link }) => {
    if(!link) link=""
    return (
        <div className={Style.box}>
            {link ? (
                <Link href={link} passHref>
                    <a className={`${Style.button} ${classStyle}`} onClick={handleClick}>
                        {icon} {btnName}
                    </a>
                </Link>
            ) : (
                <button className={`${Style.button} ${classStyle}`} onClick={handleClick}>
                    {icon} {btnName}
                </button>
            )}
        </div>
    );
}
export default Button
