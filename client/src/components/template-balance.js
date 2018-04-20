import React, { Component } from "react";

import Header from "./header";
import Footer from "./footer";
import Address from "./address";

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
