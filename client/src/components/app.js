import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import TemplateHome from "./template-home";
import TemplateBalance from "./template-balance";
import TemplateCreateWallet from "./template-create-wallet";
import TemplateSendEther from "./template-send-ether";

const SurveyNew = () => <h2>SurveyNew</h2>;

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
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
