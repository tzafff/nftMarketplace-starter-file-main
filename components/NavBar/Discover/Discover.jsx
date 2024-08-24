import React from 'react';
import Link from 'next/link';
import Style from './Discover.module.css';

const Discover = ({ closeAllMenus }) => {
    const discover = [
        { name: "Collection", link: "collection" },
        { name: "Search", link: "searchPage" },
        { name: "Author Profile", link: "author" },
        { name: "NFT Details", link: "nft-details" },
        { name: "Account Settings", link: "account" },
        { name: "Upload NFT", link: "upload-nft" },
        { name: "Connect Wallet", link: "connect-wallet" },
        { name: "Blog", link: "blog" },
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
