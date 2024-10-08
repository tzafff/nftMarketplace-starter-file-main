import React,{useState, useEffect} from 'react'
import {
    BsFillAlarmFill,
    BsFillCalendarDateFill,
    BsCalendar3
} from "react-icons/bs";

import DaysComponents from "./DaysComponents/DaysComponents";
import Style from './Collection.module.css'
import images from "../../img";

const Collection = () => {

    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);

    const CardArray = [
            {
                background: images.creatorbackground1,
                user: images.rapper4,
            },
            {
                background: images.creatorbackground1,
                user: images.rapper4,
            },
            {
                background: images.creatorbackground2,
                user: images.rapper4,
            },
            {
                background: images.creatorbackground3,
                user: images.rapper4,
            },
            {
                background: images.creatorbackground3,
                user: images.rapper4,
            },
            {
                background: images.creatorbackground4,
                user: images.rapper4,
            },
            {
                background: images.creatorbackground7,
                user: images.rapper4,
            },
            {
                background: images.creatorbackground9,
                user: images.rapper4,
            },
            {
                background: images.creatorbackground10,
                user: images.rapper4,
            },
        ]
    ;
    const FollowingArray = [
        {
            background: images.creatorbackground3,
            user: images.rapper4,
        },
        {
            background: images.creatorbackground3,
            user: images.rapper4,
        },
        {
            background: images.creatorbackground4,
            user: images.rapper4,
        },
        {
            background: images.creatorbackground4,
            user: images.rapper4,
        },
        {
            background: images.creatorbackground5,
            user: images.rapper4,
        },
        {
            background: images.creatorbackground6,
            user: images.rapper4,
        },
        {
            background: images.creatorbackground7,
            user: images.rapper4,
        },
        {
            background: images.creatorbackground8,
            user: images.rapper4,
        },
    ];
    const NewsArray = [
        {
            background: images.creatorbackground4,
            user: images.rapper4,
        },
        {
            background: images.creatorbackground6,
            user: images.rapper4,
        },
        {
            background: images.creatorbackground1,
            user: images.rapper4,
        },
        {
            background: images.creatorbackground2,
            user: images.rapper4,
        },
        {
            background: images.creatorbackground3,
            user: images.rapper4,
        },
        {
            background: images.creatorbackground5,
            user: images.rapper4,
        },

    ];

    const openPopular = () => {
        if(!popular){
            setPopular(true)
            setFollowing(false)
            setNews(false)
        }
    }

    const openFollower = () => {
        if(!following){
            setPopular(false)
            setFollowing(true)
            setNews(false)
        }
    }

    const openNews = () => {
        if(!news){
            setPopular(false)
            setFollowing(false)
            setNews(true)
        }
    }


    return (
        <div className={Style.collection}>
            <div className={Style.collection_title}>
                <h2>Top List Creators</h2>
                <div className={Style.collection_collections}>
                    <div className={Style.collection_collections_btn}>
                        <button  onClick={() => openPopular()}>
                            <BsFillAlarmFill /> Last 24 Hours
                        </button>
                        <button  onClick={() => openFollower()}>
                            <BsCalendar3 /> Last 7 Days
                        </button>
                        <button  onClick={() => openNews()}>
                            <BsFillCalendarDateFill /> Last 30 Days
                        </button>
                    </div>
                </div>
            </div>

            {popular && (
                <div className={Style.collection_box}>
                    {CardArray.map((el, i) => (
                        <DaysComponents  key={i+1} el={el} i={i}/>
                    ))}
                </div>
            )}

            {following && (
                <div className={Style.collection_box}>
                    {FollowingArray.map((el, i) => (
                        <DaysComponents  key={i+1} el={el} i={i}/>
                    ))}
                </div>
            )}

            {news && (
                <div className={Style.collection_box}>
                    {NewsArray.map((el, i) => (
                        <DaysComponents  key={i+1} el={el} i={i}/>
                    ))}
                </div>
            )}
        </div>
    )
}
export default Collection
