import React, { Component } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import CreateWallet from "../components/create-wallet";

class TemplateCreateWallet extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <CreateWallet />
        <Footer />
      </div>
    );
  }
}

export default TemplateCreateWallet;
