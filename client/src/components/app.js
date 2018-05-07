import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import TemplateHome from "./template-home";
import TemplateBalance from "./template-balance";
import TemplateCreateWallet from "./template-create-wallet";
import TemplateSendEther from "./template-send-ether";
import TemplateReceiveEther from "./template-receive-ether";
import TemplateContact from "./template-contact";

const Teste = () => <h2>SurveyNew</h2>;

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={TemplateHome} />
            <Route exact path="/balance" component={TemplateBalance} />
            <Route
              exact
              path="/createwallet"
              component={TemplateCreateWallet}
            />
            <Route path="/sendether" component={TemplateSendEther} />
            <Route path="/receiveether" component={TemplateReceiveEther} />
            <Route path="/contact" component={TemplateContact} />
            <Route path="/teste" component={Teste} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
