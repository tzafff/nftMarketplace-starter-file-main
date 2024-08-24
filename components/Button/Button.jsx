import React from 'react'
import { useRouter } from 'next/router';
import Style from './Button.module.css';

const Button = ({ icon, btnName, handleClick, classStyle, link }) => {
    const router = useRouter();

    const handleButtonClick = () => {
        if (link) {
            router.push(link); // Navigate to the provided link
        }
        if (handleClick) {
            handleClick(); // Call the provided click handler
        }
    };

    return (
        <div className={Style.box}>
            <button
                className={`${Style.button} ${classStyle}`}
                onClick={handleButtonClick}
            >
                {icon} {btnName}
            </button>
        </div>
    );
}

export default Button;
