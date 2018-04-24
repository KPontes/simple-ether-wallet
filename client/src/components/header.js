import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <ul className="nav nav-pills nav-fill">
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
          <a className="nav-link disabled" href="#">
            Contact
          </a>
        </li>
      </ul>
      <hr style={{ border: "1px solid black" }} />
    </div>
  );
};

export default Header;
