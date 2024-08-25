import React from 'react';
import Link from 'next/link';
import Style from './Discover.module.css';

const Discover = ({ closeAllMenus }) => {
    const discover = [
        // { name: "Collection", link: "collection" },
        { name: "Search NFTs", link: "searchPage" },
        { name: "Creator Profile", link: "author" },
        // { name: "NFT Details", link: "nft-details" },
        { name: "Account Settings", link: "account" },
        { name: "Create NFT", link: "upload-nft" },
        { name: "Connect Wallet", link: "connect-wallet" },
        { name: "Blog3", link: "https://tzaff-blog3.vercel.app/" },
    ];

    return (
        <div>
            {discover.map((el, i) => (
                <div key={i + 1} className={Style.discover}>
                    <Link href={{ pathname: `${el.link}` }}>
                        <a onClick={closeAllMenus}>{el.name}</a>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Discover;
