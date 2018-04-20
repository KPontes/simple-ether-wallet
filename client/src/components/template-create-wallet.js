import React, { Component } from "react";

import Header from "./header";
import Footer from "./footer";
import CreateWallet from "./create-wallet";

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
