import React, { Component } from "react";

import ControlledCarrousel from "./controlled-carrousel";

//Functional component take props as an argument
class Home extends Component {
  render() {
    var slides = [];
    slides[0] = this.firstSlide();
    slides[1] = this.secondSlide();
    slides[2] = this.thirdSlide();
    return (
      <div className="container">
        <div className="home-div">
          This is Simple Ether Wallet (SEW), designed to be safe, straight
          forward and user friendly. This wallet provides just a browser
          front-end interface, empowering you to make transactions on the
          Ethereum blockchain network. SEW does not save passwords nor private
          keys into any backend server.
        </div>
        <div align="center">
          <img src="/images/SEW.jpg" />
        </div>
        <p />

        <ControlledCarrousel slides={slides} />
      </div>
    );
  }

  firstSlide() {
    return (
      <div>
        Before Send or Receive ether, you need to Create a Wallet, by providing
        a personal password. This enable SEW to generate an Ethereum public
        address and private key. Print your keys information and save your your
        keys file in a safe storage. You will need your public address to access
        your balance, and to receive funds. Analogously, you will need the
        private key to sign Send Ether transactions.
      </div>
    );
  }
  secondSlide() {
    return (
      <div>
        The View Balance feature enable you to query a balance of the Ether
        amount of your valid ethereum public address.
      </div>
    );
  }
  thirdSlide() {
    return (
      <div>
        In order to Send Ether to other addresses, you will need to unlock your
        wallet through one of the options: (1) type your password and select the
        encrypted keys file (2) type or paste your private key, or (3) type or
        paste your mnemonic recover passphrase.
        <br />
        With the unlocked wallet, you will be able to enter the destination
        address and the amount to be transfered.
        <br />
        The Results Panel will provide a confirmation with the transaction id.
      </div>
    );
  }
}

export default Home;
