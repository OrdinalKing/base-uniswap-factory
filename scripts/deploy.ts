import { ethers } from "hardhat";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = ethers.parseEther("0.001");

  const UniswapV2Factory = await ethers.deployContract("UniswapV2Factory",['0x2DA7A4736dC105335adb87AC4365e55D4e8489b1']);

  await UniswapV2Factory.waitForDeployment();

  console.log(
    `deployed to ${UniswapV2Factory.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
