import React from "react";
import CryptoJS from "crypto-js";

export function encryptObj(obj, key) {
  // Encrypt
  var cipherText = CryptoJS.AES.encrypt(JSON.stringify(obj), key).toString();
  return cipherText;
}

export function decrypt(ciphertext, key) {
  //Decrypt
  var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), key);
  var decryptedText = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedText;
}
