import React, { Component } from "react";
import { viewAddressInfo } from "../utils/ethereum";

//Class component have props available everywhere and must be used when you need to keep state
class Address extends Component {
  constructor(props) {
    super(props);
    //constructor is the only place where you assgin state directly
    this.state = {
      address: "",
      previousAddress: "",
      balance: "0.00",
      btnText: "View Info"
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    //this.onBtnViewClick = this.onBtnViewClick.bind(this);
  }
  // Mandatory render method
  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.onFormSubmit}>
          <label> Address: </label>
          <div className="input-group">
            <input
              placeholder="paste your public address"
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

        <div text-align="left">
          <p />
          <h4> Balance: {this.state.balance} </h4>
          <h5> Address: {this.state.previousAddress} </h5>
        </div>
      </div>
    );
  }

  onInputChange(address) {
    this.setState({ address, balance: "0.00", previousAddress: "" });
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
}

export default Address;
