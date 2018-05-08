import React, { Component } from "react";
import Download from "@axetroy/react-download";
import CryptoJS from "crypto-js";
import moment from "moment";

import { createWallet } from "../utils/ethereum";
import { encryptObj, decrypt } from "../utils/cipher";
import Help from "./help";

//Class component have props available everywhere and must be used when you need to keep state
class CreateWallet extends Component {
  constructor(props) {
    super(props);
    //constructor is the only place where you assgin state directly
    this.state = {
      address: "",
      password: "",
      privateKey: "",
      mnemonic: "",
      displayResult: false,
      btnText: "Create"
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  renderPartial(cipherText, keyObj) {
    var fileExtension = moment().format("YYYYMMDDHHmmss") + ".sew";
    return (
      <div class="card text-left">
        <div class="card-header">
          <strong>
            <p>
              The Results Table provides the information that enables you to
              access your funds, send and receive ETHER with this wallet.
            </p>
            Take the three actions bellow and make sure you store saved files
            and printout safely. Simple Ether Wallet can not recover them for
            you in case of loss:
          </strong>
          <p />
          <ol>
            <li>
              Click the "Save Encrypted" button to save your results table as an
              encrypted file on your local machine
            </li>
            <li>
              Click the "Save Plain Text" button to save your results table as a
              plain text file on your local machine
            </li>
            <li>Print this page and store the printed document safely</li>
          </ol>
        </div>
        <div class="card-body" align="center">
          <table>
            <th>
              <b>Results Table:</b>
            </th>
            <tr className="table-info">
              <td class="col-sd-4">Your public address:</td>
              <td class="col-sd-8">{this.state.address}</td>
            </tr>
            <tr className="table-info">
              <td class="col-sd-4">Your private Key:</td>
              <td class="col-sd-8">{this.state.privateKey}</td>
            </tr>
            <tr className="table-info">
              <td class="col-sd-4">Your recovery passphrase:</td>
              <td class="col-sd-8">{this.state.mnemonic}</td>
            </tr>
          </table>
        </div>
        <div class="card-footer text-muted">
          <table>
            <tr>
              <td>
                <Download
                  file={"SEW-encrypted-" + fileExtension}
                  content={cipherText}
                >
                  <button type="button" class="btn btn-danger">
                    Save Encrypted results table to local file
                  </button>
                </Download>
              </td>
              <td />
              <td>
                <Download
                  file={"SEW-plaintext-" + fileExtension}
                  content={JSON.stringify(keyObj)}
                >
                  <button type="button" class="btn btn-danger">
                    Save Plain Text results table to local file
                  </button>
                </Download>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }

  render() {
    const helpData = this.showHelpData();

    var partial = <div />;
    if (this.state.displayResult) {
      //stringfy json object for further saving on file
      var keyObj = {
        address: this.state.address,
        privateKey: this.state.privateKey,
        mnemonic: this.state.mnemonic
      };

      const cipherText = encryptObj(keyObj, this.state.password);
      const plainObj = JSON.parse(decrypt(cipherText, this.state.password));

      //display query results and save button
      var partial = this.renderPartial(cipherText, plainObj);
    }

    return (
      <div className="container">
        <Help helpData={helpData} />
        <form onSubmit={this.onFormSubmit}>
          <label> Enter a password: </label>
          <div className="input-group">
            <input
              placeholder="Type your eight digits password"
              type="password"
              className="form-control"
              value={this.state.password}
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
        <p>
          <font color="#873468">
            Make sure you remember your password, you will need it to access
            your funds. We do not save it, so we can not recover it for you.
          </font>
        </p>
        <hr />
        {partial}
      </div>
    );
  }

  onInputChange(password) {
    this.setState({
      password: password.trim(),
      address: "",
      privateKey: "",
      displayResult: false,
      mnemonic: ""
    });
  }

  async onFormSubmit(event) {
    event.preventDefault();

    if (this.state.password.length < 8) {
      return alert("Password must have at least 8 digits");
    }

    this.refs.btn.setAttribute("disabled", "disabled");
    this.setState({ btnText: "Processing ..." });
    try {
      const wallet = await createWallet(this.state.password);
      this.setState({
        address: wallet.address,
        mnemonic: wallet.mnemonic,
        privateKey: wallet.privateKey,
        displayResult: true
      });
    } catch (e) {
      alert("Error: " + e.message);
    }
    this.refs.btn.removeAttribute("disabled");
    this.setState({
      btnText: "Create",
      password: ""
    });
  }

  showHelpData() {
    return (
      <div>
        <p>
          Type in your password, and the Create Wallet will generate (1) an
          ethereum address, (2) the private key to sign transactions from this
          address, and (3) a mnemonic recover passphrase.
        </p>
        <p>
          This three pieces of information provides the access to your ethereum
          funds. Think of an address as a bank account and the private key as
          your access credentials to moviment the funds on that account. The
          mnemonic is a way to recover address and private key in case of loss.
        </p>
        <p>
          Once the wallet has beem created, you will be presented with a button
          for saving this information locally on your computer as an encrypted
          file, and another button to save as a plain text file. Save those
          files in a safe storage, make backup, and also print the result
          screen. The only way to access your encrypted file is with the
          password typed to generate the wallet. Make sure you never edit your
          encrypted file, avoiding to corrupt it.
        </p>
        <p>
          SEW does not hold your keys, so we can not recover keys or reset
          password. Note that SEW can not access your account nor reverse
          transactions.
        </p>
      </div>
    );
  }
}

export default CreateWallet;
