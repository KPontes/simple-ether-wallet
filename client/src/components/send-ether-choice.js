import React, { Component } from "react";
import _ from "lodash";
import FileInput from "react-simple-file-input";
import CryptoJS from "crypto-js";

import { viewAddressInfo } from "../utils/ethereum";
import SendEtherPanel from "./send-ether-panel";

var allowedFileTypes = ["text/plain"]; //, "image/jpeg", "image/gif"];

function fileIsIncorrectFiletype(file) {
  if (allowedFileTypes.indexOf(file.type) === -1) {
    return true;
  } else {
    return false;
  }
}

//Class component have props available everywhere and must be used when you need to keep state
class SendEtherChoice extends Component {
  constructor(props, context) {
    super(props, context);

    this.cancelButtonClicked = this.cancelButtonClicked.bind(this);
    this.resetCancelButtonClicked = this.resetCancelButtonClicked.bind(this);
    this.showProgressBar = this.showProgressBar.bind(this);
    this.updateProgressBar = this.updateProgressBar.bind(this);
    this.handleFileSelected = this.handleFileSelected.bind(this);

    this.state = {
      cancelButtonClicked: false,
      fileContents: "",
      password: "",
      keysObj: {}
    };
  }

  encryptObj(obj, key) {
    // Encrypt
    var cipherText = CryptoJS.AES.encrypt(JSON.stringify(obj), key).toString();
    return cipherText;
  }

  decrypt(ciphertext, key) {
    //Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), key);
    var decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
  }

  // Mandatory render method
  render() {
    const unlockWithEncryptedFile = this.partialUnlockEncryptedFile();
    if (!_.isEmpty(this.state.keysObj)) {
      const unlockWithEncryptedFile = this.partialUnlockEncryptedFile();
    }

    return (
      <div className="container mb-5">
        <label> Enter the password to unlock your keys file: </label>
        <div className="input-group">
          <input
            placeholder="Type a minimum eight digits password"
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>
        {unlockWithEncryptedFile}
        <SendEtherPanel keysObj={this.state.keysObj} />
      </div>
    );
  }

  partialUnlockEncryptedFile() {
    if (this.state.password.length >= 8) {
      return (
        <div className="mt-2">
          Unlock your wallet:
          <button type="button" class="btn btn-primary btn-margin">
            <label>
              <FileInput
                readAs="text"
                style={{ display: "none" }}
                onLoadStart={this.showProgressBar}
                onLoad={this.handleFileSelected}
                onProgress={this.updateProgressBar}
                cancelIf={fileIsIncorrectFiletype}
                abortIf={this.cancelButtonClicked}
                onCancel={this.showInvalidFileTypeMessage}
                onAbort={this.resetCancelButtonClicked}
              />

              <span>Click to get your keys file</span>
            </label>
          </button>
        </div>
      );
    }
  }

  async handleFileSelected(event, file) {
    var cipher = await event.target.result.toString();
    this.setState({ file: file, fileContents: cipher });

    // var cipher2 =
    //   "U2FsdGVkX19ZlOQsteyUdA+3fq2VqY0KQFzcYK3xcfzss0MvBTmXefq11Avc9p0CEOxanKnRBRELVemrx9b6eN9E+soxRIllI6y4SDZbroD3OWIWcb6vfzNN8TkcSBZQr//hF2gDCRoVbl/VQQKqH5iIwJH9AZxi/x8/N1U49XUcPLJs/VY3cpmBIlrEWWHvZG1UwBueiZxPF2G9uyBkEYI+I+e/sqqHprKWun3hpMehvjHWvX0YsxFUdEGrt2/L0NybE+K202nhRm01pAqXvzuxshL3IKRTTGI2pyRIiXV+hX9JLXzAgpG0IbCNFSFbNG23Bybz3V7fcGO5hx1N6w==";
    //console.log("Compara", cipher == cipher2);

    var plainText = this.decrypt(cipher, this.state.password);
    var keysObj = JSON.parse(plainText);
    const balance = await viewAddressInfo(keysObj.address);
    keysObj["balance"] = balance;
    this.setState({ keysObj: keysObj });
  }

  onInputChange(password) {
    this.setState({
      password: password.trim()
    });
  }

  cancelButtonClicked() {
    return this.state.cancelButtonClicked;
  }

  resetCancelButtonClicked() {
    this.setState({ cancelButtonClicked: false });
  }

  showInvalidFileTypeMessage(file) {
    window.alert("Tried to upload invalid filetype " + file.type);
  }

  showProgressBar() {
    this.setState({ progressBarVisible: true });
  }

  updateProgressBar(event) {
    this.setState({
      progressPercent: event.loaded / event.total * 100
    });
  }
}
export default SendEtherChoice;
