const { task } = require("hardhat/config");

task("block-number", "Prints The Current Block Numeber").setAction(
  async (taskArgs, hre) => {
    const BlockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Current Block number is ${BlockNumber}`);
  }
);

module.exports;
