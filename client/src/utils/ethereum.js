import React from "react";
import ethers from "ethers";

const NETWORK = "rinkeby";
const providers = ethers.providers;

// const address1 = "0x5fEDb99AAe7F1880A7a97b0cbe070231a6678f07";
// const address2 = "0x3c511616bA2F6bD8Aa4e1e9Cdc20389dC6B6b107";
// const address3 = "0x85Be6c1f4DE7a2D1de9564086394700ccb7d0852";
// "0x797336cf22a6171b4cb179d6a9c08e5848cbd1748563bc44ea66c506fb0aef8c"
// image mansion angle choose sauce net true dice truck wing ritual alter

export async function viewAddressInfo(keysObj) {
  //query balance by address or pk
  if (keysObj.address) {
    const provider = providers.getDefaultProvider(NETWORK);
    var balance = await provider.getBalance(keysObj.address);
  } else {
    if (keysObj.privateKey) {
      var wallet = new ethers.Wallet(keysObj.privateKey);
    } else {
      var wallet = new ethers.Wallet.fromMnemonic(keysObj.mnemonic);
    }
    wallet.provider = ethers.providers.getDefaultProvider(NETWORK);
    var balance = await wallet.getBalance();
    keysObj["address"] = await wallet.getAddress();
  }
  // balance is a BigNumber (in wei); format it as a string (in ether)
  const etherString = ethers.utils.formatEther(balance);
  keysObj["balance"] = etherString;
  return keysObj;
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
  var options = {
    gasLimit: 21000
    //gasPrice: utils.bigNumberify("20000000000")
  };
  var transaction = await wallet.send(toAddress, amount, options);
  return transaction;
}
