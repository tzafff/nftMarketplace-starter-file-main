// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NftMarketPlace is ERC721URIStorage{
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    error NftMarketPlace__CallerIsNotContractOwner();
    error NftMarketPlace__PriceMustBeAboveZero();
    error NftMarketPlace__IncorrectListingPrice();
    error NftMarketPlace__CallerIsNotTokenOwner();
    error NftMarketPlace__IncorrectPurchaseAmount();

    address payable owner;

    modifier onlyOwner() {
        if(msg.sender != owner) revert NftMarketPlace__CallerIsNotContractOwner();
        _;
    }

    mapping(uint256 => MarketItem) private idMarketItem;

    uint256 public listingPrice = 0.0025 ether;

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event idMarketItemCreated(uint256 indexed tokenId, address seller, address owner, uint256 price, bool sold);

    constructor() ERC721("NFT Metaverse Token", "MYNFT") {
        owner = payable(msg.sender);
    }

    // Update the listing price fee, only callable by the contract owner
    function updateListingPriceFee(uint256 _listingPrice) public payable  onlyOwner{
        listingPrice = _listingPrice;
    }

    // Get the current listing price
    function getListingPrice() public view returns(uint256)  {
        return listingPrice;
    }

    // Create a new NFT token and list it on the marketplace
    function createToken(string memory tokenUri, uint256 price) public payable returns(uint256)  {
        _tokenIds.increment();

        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenUri);

        createMarketItem(newTokenId, price);


        return newTokenId;
    }

    // Create a new market item and list it on the marketplace
    function createMarketItem(uint256 tokenId, uint256 price) private  {
        if(price <= 0 ) revert NftMarketPlace__PriceMustBeAboveZero();
        if(msg.value != listingPrice) revert NftMarketPlace__IncorrectListingPrice();

        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
        false
        );

        _transfer(msg.sender, address(this), tokenId);

        emit idMarketItemCreated(tokenId, msg.sender, address(this), price, false);
    }

    // Relist a token for sale on the marketplace with a new price
    function reSellToken(uint256 tokenId, uint256 price) public payable  {
        if(idMarketItem[tokenId].owner != msg.sender) revert NftMarketPlace__CallerIsNotTokenOwner();
        if(msg.value != listingPrice) revert NftMarketPlace__IncorrectListingPrice();

        idMarketItem[tokenId].sold = false;
        idMarketItem[tokenId].price = price;
        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner = payable(address(this));

        _itemsSold.decrement();

        _transfer(msg.sender, address(this), tokenId);
    }

    // Purchase a listed NFT from the marketplace
    function createMarketSale(uint256 tokenId) public payable  {
        uint256 price = idMarketItem[tokenId].price;

        if(msg.value != price) revert NftMarketPlace__IncorrectPurchaseAmount();

        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold = true;
        idMarketItem[tokenId].seller = payable(address(0));

        _itemsSold.increment();

        _transfer(address(this), msg.sender, tokenId);

        payable(owner).transfer(listingPrice);
        payable(idMarketItem[tokenId].seller).transfer(msg.value);
    }

    // Get all unsold items on the marketplace
    function fetchMarketItems() public view returns(MarketItem[] memory)  {
        uint256 itemCount = _tokenIds.current();
        uint256 unSoldItemCount = _tokenIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unSoldItemCount);
        for(uint256 i = 0; i < itemCount; i++) {
            if(idMarketItem[i + 1].owner == address(this)){
               uint256 currentId = i + 1;

                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    // Get all NFTs owned by the caller
    function fetchMyNFT() public view returns(MarketItem[] memory)  {
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i = 0; i < totalCount; i++) {
            if(idMarketItem[i + 1].owner == msg.sender){
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for(uint256 i = 0; i < totalCount; i++) {
            if(idMarketItem[i + 1].owner == msg.sender){
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    // Get all items listed by the caller
    function fetchItemsListed() public view returns (MarketItem[] memory)  {
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i = 0; i < totalCount; i++) {
            if(idMarketItem[i + 1].seller == msg.sender){
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);

        for(uint256 i = 0; i < totalCount; i++) {
            if(idMarketItem[i + 1].seller == msg.sender){
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }



}