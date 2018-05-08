import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import ethers from "ethers";

//Class component have props available everywhere and must be used when you need to keep state
class SendEtherResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.transaction.hash) {
      var toAddress = "/balance/" + this.props.address;
      return (
        <div className="presentation-div">
          TRANSACTION RESULTS FROM THE BLOCKCHAIN <br />
          <div className="card-table input-margin">
            <div className="row">
              <div className="col-md-2">
                <label> transaction Id: </label>
              </div>
              <div className="col-md-10">
                <label> {this.props.transaction.hash} </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <label for="toAddress"> to Address: </label>
              </div>
              <div className="col-md-10 form-group">
                <label> {this.props.transaction.to} </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <label for="toAddress"> Value: </label>
              </div>
              <div className="col-md-10 form-group">
                <label>
                  {ethers.utils.formatEther(this.props.transaction.value)}{" "}
                </label>
              </div>
            </div>
          </div>
          <div align="right" className="mr-5">
            <span> Wait two minutes and </span>
            <Link to={toAddress} id="balance">
              view New Balance
            </Link>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SendEtherResult;
