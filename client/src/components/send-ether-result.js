import React, { Component } from "react";
import _ from "lodash";
import ethers from "ethers";

//Class component have props available everywhere and must be used when you need to keep state
class SendEtherResult extends Component {
  constructor(props) {
    super(props);

    this.handleBalanceClick = this.handleBalanceClick.bind(this);
  }

  render() {
    if (this.props.transaction.hash) {
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
            <button
              type="button"
              class="btn btn-primary"
              onClick={event => this.handleBalanceClick()}
            >
              VIEW NEW BALANCE
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  handleBalanceClick(event) {
    alert("REDIRECT TO BALANCE");
  }
}

export default SendEtherResult;
