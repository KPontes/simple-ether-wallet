import React, { Component } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../components/home";

class TemplateHome extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default TemplateHome;
