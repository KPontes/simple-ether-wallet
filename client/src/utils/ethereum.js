import React from "react";
import ethers from "ethers";

const NETWORK = "rinkeby";
const providers = ethers.providers;
const provider = providers.getDefaultProvider(NETWORK);

// const address1 = "0x5fEDb99AAe7F1880A7a97b0cbe070231a6678f07";
// const address2 = "0x3c511616bA2F6bD8Aa4e1e9Cdc20389dC6B6b107";

export async function viewAddressInfo(address) {
  const balance = await provider.getBalance(address);
  // balance is a BigNumber (in wei); format it as a string (in ether)
  const etherString = ethers.utils.formatEther(balance);
  return etherString;
}

export async function createWallet() {
  //const wallet = await ethers.Wallet.fromBrainWallet(username, password);
  const wallet = await ethers.Wallet.createRandom();
  return wallet;
}
