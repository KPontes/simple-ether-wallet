import React, { Component } from "react";
import Download from "@axetroy/react-download";
import CryptoJS from "crypto-js";

import { createWallet } from "../utils/ethereum";

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
    //this.onBtnSave = this.onBtnSave.bind(this);
  }

  encryptObj(obj, key) {
    // Encrypt
    var cipherText = CryptoJS.AES.encrypt(JSON.stringify(obj), key);
    cipherText = cipherText.toString();
    return cipherText;
  }

  decrypt(ciphertext, key) {
    //Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext, key);
    var decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
  }

  renderPartial(cipherText, keyObj) {
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
                <Download file="cipher.md" content={cipherText}>
                  <button type="button" class="btn btn-danger">
                    Save Encrypted results table to local file
                  </button>
                </Download>
              </td>
              <td />
              <td>
                <Download file="plain.md" content={JSON.stringify(keyObj)}>
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

  // Mandatory render method
  render() {
    var partial = <div />;
    if (this.state.displayResult) {
      //stringfy json object for further saving
      var keyObj = {
        address: this.state.address,
        privateKey: this.state.privateKey,
        mnemonic: this.state.mnemonic
      };

      const cipherText = this.encryptObj(keyObj, this.state.password);
      keyObj = JSON.parse(this.decrypt(cipherText, this.state.password));

      //display query results and save button
      var partial = this.renderPartial(cipherText, keyObj);
    }

    return (
      <div className="container">
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
          <font color="red">
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
      password,
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

    const wallet = await createWallet(this.state.password);
    console.log(wallet);

    this.setState({
      btnText: "Create",
      address: wallet.address,
      password: "",
      mnemonic: wallet.mnemonic,
      privateKey: wallet.privateKey,
      displayResult: true
    });
    this.refs.btn.removeAttribute("disabled");
  }
}

export default CreateWallet;
