require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
require("hardhat-gas-reporter");

const GOERLINETWORK = process.env.GOERLI_RPC_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const PRIVATE_KEY_GOERLI = process.env.GOERLI_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: GOERLINETWORK,
      account: [PRIVATE_KEY_GOERLI],
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      //acounts from yarn hardhat node
      chainId: 31337,
    },
  },
  solidity: "0.8.17",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
  },
};
