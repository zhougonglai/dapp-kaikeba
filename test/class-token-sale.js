const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ClassToken", function () {
  const initialSupply = ethers.utils.parseEther('10000.0');
  let token, tokenSale;
  let owner, account1;
  let address1;
  beforeEach(async function () {
    [owner, account1] = await ethers.getSigners()
    address1 = await account1.getAddress()

    const ClassToken = await ethers.getContractFactory("ClassToken")
    token = await ClassToken.deploy(initialSupply)
    await token.deployed()
    const ClassTokenSale = await ethers.getContractFactory("ClassTokenSale")
    tokenSale = await ClassTokenSale.deploy(token.address,'100')
    await tokenSale.deployed()
    token.transfer(tokenSale.address,ethers.utils.parseEther('5000.0'))
  })

  it("Should deposit and with CLT correctly", async function () {
    expect(await token.balanceOf(tokenSale.address)).to.equal(ethers.utils.parseEther('5000.0'))

    await tokenSale.withdrawAll()
    expect(await token.balanceOf(tokenSale.address)).to.equal(0)
    expect(await token.balanceOf(await owner.getAddress())).to.equal(initialSupply)
  })

})
