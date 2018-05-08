import React, { Component } from "react";

import Header from "./header";
import Footer from "./footer";
import Address from "./address";

class TemplateBalance extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container-fluid">
        <Header activeMenuItem={"balance"} />
        <Address address={this.props.match.params.address} />
        <Footer />
      </div>
    );
  }
}

export default TemplateBalance;
