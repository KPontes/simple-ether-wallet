import React, { Component } from "react";
import { viewAddressInfo } from "../utils/ethereum";
import Help from "./help";

//Class component have props available everywhere and must be used when you need to keep state
class Address extends Component {
  constructor(props) {
    super(props);
    //constructor is the only place where you assgin state directly
    this.state = {
      address: "",
      previousAddress: "",
      balance: "",
      btnText: "View Info"
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render() {
    const helpData = this.showHelpData();
    const partialResultPanel = this.partialResultPanel();
    return (
      <div className="container form-group">
        <Help helpData={helpData} />

        <form onSubmit={this.onFormSubmit}>
          <label style={{ fontSize: "large" }}> Address: </label>
          <div className="input-group">
            <input
              placeholder="type or paste your public address"
              className="form-control"
              value={this.state.address}
              onChange={event => this.onInputChange(event.target.value)}
            />
            <span className="input-group-btn btn-margin">
              <button
                ref="btn"
                type="submit"
                className="btn btn-primary btn-lg"
              >
                {this.state.btnText}
              </button>
            </span>
          </div>
        </form>
        {partialResultPanel}
      </div>
    );
  }

  onInputChange(address) {
    this.setState({ address, balance: "", previousAddress: "" });
  }

  async onFormSubmit(event) {
    event.preventDefault();

    this.refs.btn.setAttribute("disabled", "disabled");
    this.setState({ btnText: "Loading ..." });

    const balance = await viewAddressInfo(this.state.address);

    this.setState({
      previousAddress: this.state.address,
      balance: balance,
      btnText: "View Info",
      address: ""
    });
    this.refs.btn.removeAttribute("disabled");
  }

  partialResultPanel() {
    if (this.state.balance) {
      return (
        <div text-align="left">
          <p />
          <h5> Balance: {this.state.balance} </h5>
          <h5> Address: {this.state.previousAddress} </h5>
          <p>
            <a
              href={`https://etherscan.io/address/${
                this.state.previousAddress
              }`}
              target="_blank"
            >
              Click for Transaction History
            </a>
          </p>
        </div>
      );
    } else return null;
  }

  showHelpData() {
    return (
      <div>
        Type in or paste your public ethereum address, and press the view button
        to retrieve the balance information. You will also be provided a link
        for the transaction history of your address at etherscan.io .
      </div>
    );
  }
}

export default Address;
