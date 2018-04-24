import React from "react";

const ReceiveEther = props => {
  return (
    <div className="container">
      <p>RECEIVE ETHER</p>
      <p>
        Provide ONLY your Address (never the private key nor the mnemonic) to
        the other part that will transfer some Ether amount for you.
      </p>
      <p>You may check your ethereum public address by:</p>
      <ol>
        <li>
          Verifying the SEW-plaintext file, that you saved on the Create Wallet
          operation.
        </li>
        <li>
          Or typing your password and opening the SEW-encrypted file, also saved
          during the Create Wallet operation.
        </li>
      </ol>
      <p />
    </div>
  );
};

export default ReceiveEther;
