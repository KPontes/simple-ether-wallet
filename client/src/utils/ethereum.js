import React from "react";
import ethers from "ethers";

const NETWORK = "rinkeby";
const providers = ethers.providers;

// const address1 = "0x5fEDb99AAe7F1880A7a97b0cbe070231a6678f07";
// const address2 = "0x3c511616bA2F6bD8Aa4e1e9Cdc20389dC6B6b107";
// const address3 = "0x85Be6c1f4DE7a2D1de9564086394700ccb7d0852";

export async function viewAddressInfo(address) {
  const provider = providers.getDefaultProvider(NETWORK);
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

export async function sendEther(pk, toAddress, etherValue) {
  var wallet = new ethers.Wallet(pk);
  wallet.provider = ethers.providers.getDefaultProvider(NETWORK);

  // We must pass in the amount as wei, so need to convert ether to wei.
  var amount = ethers.utils.parseEther(etherValue);

  var transaction = await wallet.send(toAddress, amount);
  return transaction;
}
