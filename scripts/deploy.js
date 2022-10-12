const { Contract } = require("ethers");
const { ethers, run } = require("hardhat");

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying Contract ...");
  const fuck = await SimpleStorageFactory.deploy();
  await fuck.deployed();
  const store = await fuck.store(4);
  const FavouriteNumber = await fuck.retreive();
  console.log(`Deploying Contract to ${fuck.address}`);
  console.log(FavouriteNumber);
  // verify(SimpleStorage.address, []);
}

// async function verify(contractaddress, args) {
//   console.log("Verifying Contract ...");
//   try {
//     await run("verify:verify", {
//       address: contractaddress,
//       constructorArguments: args,
//     });
//   } catch (e) {
//     if (e.message.toLowerCase().includes("already verified")) {
//       console.log("Already Verified");
//     } else {
//       console.log(e);
//     }
//   }
// }

main();
