import React from "react";

const ReceiveEther = props => {
  return (
    <div className="container">
      <p>RECEIVE ETHER</p>
      <p>
        Provide ONLY your Address (
        <font color="#873468"> never the private key nor the mnemonic</font> )
        to the other part that will transfer some Ether amount for you.
      </p>
      <p>You may check your ethereum public address by:</p>
      <ol>
        <li>
          Verifying the SPW-plaintext file, that you saved on the Create Wallet
          operation.
        </li>
        <li>
          Or typing your password and opening the SPW-encrypted file, also saved
          during the Create Wallet operation.
        </li>
      </ol>
      <p />
    </div>
  );
};

export default ReceiveEther;
