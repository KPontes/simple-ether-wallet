import React, { Component } from "react";
import FileInput from "react-simple-file-input";
import CryptoJS from "crypto-js";

var allowedFileTypes = ["text/plain", "image/jpeg", "image/gif"];

function fileIsIncorrectFiletype(file) {
  if (allowedFileTypes.indexOf(file.type) === -1) {
    return true;
  } else {
    return false;
  }
}

//Class component have props available everywhere and must be used when you need to keep state
class SendEther extends Component {
  constructor(props, context) {
    super(props, context);

    this.cancelButtonClicked = this.cancelButtonClicked.bind(this);
    this.resetCancelButtonClicked = this.resetCancelButtonClicked.bind(this);
    this.showProgressBar = this.showProgressBar.bind(this);
    this.updateProgressBar = this.updateProgressBar.bind(this);
    this.handleFileSelected = this.handleFileSelected.bind(this);

    this.state = {
      cancelButtonClicked: false
    };
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

  // Mandatory render method
  render() {
    return (
      <div>
        To upload a file:
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

          <span>Click Here</span>
        </label>
      </div>
    );
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

  handleFileSelected(event, file) {
    this.setState({ file: file, fileContents: event.target.result });
    console.log(event.target.result);
  }
}
export default SendEther;
