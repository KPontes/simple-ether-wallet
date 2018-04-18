import React, { Component } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Address from "../components/address";

class TemplateBalance extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Address />
        <Footer />
      </div>
    );
  }
}

export default TemplateBalance;
