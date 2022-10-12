const { ethers } = require("hardhat");
const { expect, assert } = require("chai");
const {
  isCallTrace,
} = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

describe("SimpleStorage", function () {
  let SimpleStorageFactory;
  let simpleStorage;
  beforeEach(async function () {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorageFactory.deploy();
  });
  it(async function () {
    const currentvalue = await simpleStorageFactory.retreive();
    const expectedValue = "0";
    assert.equal(currentvalue.toString(), expectedValue);
    expect(currentvalue.toString()).to.equal(expectedValue);
  });
});
