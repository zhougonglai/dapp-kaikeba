import { ethers } from 'hardhat'

async function main() {
  const ClassToken = await hre.ethers.getContractFactory("ClassToken");
  const classToken = await ClassToken.deploy(ethers.utils.parseEther(12345678000));

  await classToken.deployed();

  console.log('ClassToken deployed to:', classToken.address);
}


main()
.then(() => process.exit(0))
.catch(err => {
  console.error(err);
  process.exit(1);
})
