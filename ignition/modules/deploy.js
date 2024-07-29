const hre = require("hardhat");

async function main() {
  // Compile contracts if needed
  await hre.run('compile');

  // Deploy the contract
  const NFTMarketPlace = await hre.ethers.getContractFactory("NftMarketPlace");
  const nftMarketPlace = await NFTMarketPlace.deploy();

  await nftMarketPlace.deployed();

  console.log("NftMarketPlace deployed to:", nftMarketPlace.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });