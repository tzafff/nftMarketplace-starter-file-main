import React,{useState, useMemo, useCallback, useContext} from 'react'
import Image from "next/image";
import {useDropzone} from "react-dropzone";
import images from '../img'

import Form from '../accountPage/Form/Form'
import { FaUser } from "react-icons/fa";


import Style from '../styles/account.module.css'
const Account = () => {

    const [fileUrl, setFileUrl] = useState(null);
    const onDrop = useCallback(async(acceptedFile) => {
        setFileUrl(acceptedFile[0])
    },[])

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: "image/*",
        maxFiles:5000000
    })

    return (
        <div className={Style.account}>
            <div className={Style.account_info}>
                <h1>Profile Settings</h1>
                <p>
                    Set a Preferred Display Name, Create a Unique Profile URL, and Manage Your Personal Settings with Ease.
                </p>
            </div>

            <div className={Style.account_box}>
                <div className={Style.account_box_img} {...getRootProps()}>
                    <input {...getInputProps()}/>
                    <FaUser size={30}/>
                    <p className={Style.account_box_img_para}>Change Image</p>
                </div>
                <div className={Style.account_box_form}>
                    <Form />
                </div>
            </div>
        </div>
    )
}
export default Account
