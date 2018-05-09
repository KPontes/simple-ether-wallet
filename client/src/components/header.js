import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div style={{ margin: "10px" }}>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <img src="/images/SEW-logo.png" height="42" width="70" />
        </li>
        <li className="nav-item">
          <Link
            to="/"
            id="home"
            className={
              props.activeMenuItem == "home" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/createwallet"
            id="createwallet"
            className={
              props.activeMenuItem == "createwallet"
                ? "nav-link active"
                : "nav-link"
            }
          >
            create Wallet
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/balance"
            id="balance"
            className={
              props.activeMenuItem == "balance" ? "nav-link active" : "nav-link"
            }
          >
            view Balance
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/sendether"
            id="sendether"
            className={
              props.activeMenuItem == "sendether"
                ? "nav-link active"
                : "nav-link"
            }
          >
            send Ether
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/receiveether"
            id="receiveether"
            className={
              props.activeMenuItem == "receiveether"
                ? "nav-link active"
                : "nav-link"
            }
          >
            receive Ether
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            id="contact"
            className={
              props.activeMenuItem == "contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
      <br />
      <div className="prd-message-div">
        <font color="red">
          *** This wallet is on Beta-Test, currently it is using the Rinkeby
          Test Network. Do not make real Ether operation yet. ***
        </font>
      </div>
      <hr style={{ border: "1px solid black" }} />
    </div>
  );
};

export default Header;
