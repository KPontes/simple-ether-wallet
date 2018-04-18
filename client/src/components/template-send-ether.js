import React, { Component } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import SendEther from "../components/send-ether";

class TemplateCreateWallet extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <SendEther />
        <Footer />
      </div>
    );
  }
}

export default TemplateCreateWallet;
