import React, { Component } from "react";

import Header from "./header";
import Footer from "./footer";
import SendEtherChoice from "./send-ether-choice";

class TemplateCreateWallet extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <SendEtherChoice />
        <Footer />
      </div>
    );
  }
}

export default TemplateCreateWallet;
