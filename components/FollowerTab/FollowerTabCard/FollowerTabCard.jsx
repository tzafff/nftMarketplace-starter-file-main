import React, { useState } from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { RiAccountCircleFill } from 'react-icons/ri';
import images from '../../../img'; // Importing the images object
import Style from './FollowerTabCard.module.css';

const FollowerTabCard = ({ i, el }) => {
    const [following, setFollowing] = useState(false);

    const followMe = () => {
        setFollowing(!following);
    };

    // Dynamically select background image based on index
    const backgroundImage = images[`creatorbackground${i + 1}`] || images.creatorbackground1;

    return (
        <div className={Style.FollowerTabCard}>
            <div className={Style.FollowerTabCard_rank}>
                <p>
                    #{i + 1} <span>🥇</span>
                </p>
            </div>

            <div className={Style.FollowerTabCard_box}>
                <div className={Style.FollowerTabCard_box_img}>
                    <Image
                        src={backgroundImage}
                        alt="profile bg"
                        width={500}
                        height={300}
                        className={Style.FollowerTabCard_box_img_img}
                        objectFit={"cover"}
                    />
                </div>

                <div className={Style.FollowerTabCard_box_profile}>
                    <Image
                        className={Style.FollowerTabCard_box_profile_img}
                        alt="profile pic"
                        width={50}
                        height={50}
                        src={el.user || images.zgcmq} // Default to user1 if el.user is undefined
                    />
                </div>

                <div className={Style.FollowerTabCard_box_info}>
                    <div className={Style.FollowerTabCard_box_info_name}>
                        <h4>
                            {`${el.seller.slice(0, 5)}...${el.seller.slice(-5)}`}{" "}
                            <span>
                                <MdVerified />
                            </span>
                        </h4>
                        <p>{el.total || 0} ETH</p>
                    </div>

                    <div className={Style.FollowerTabCard_box_info_following}>
                        {following ? (
                            <a onClick={followMe}>
                                Follow{" "}
                                <span>
                                    <TiTick />
                                </span>
                            </a>
                        ) : (
                            <a onClick={followMe}>
                                Following
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FollowerTabCard;
