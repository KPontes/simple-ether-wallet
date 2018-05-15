import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container">
      <p>CONTACT</p>
      <div className="card-table input-margin">
        <div className="row">
          <div className="col-md-1">
            <Link
              to="https://github.com/KPontes/simple-ether-wallet"
              target="_blank"
            >
              <img
                src="/images/github.png"
                height="40"
                width="40"
                alt=""
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="col-md-1">
            <Link to="mailto:krishnanpontes@gmail.com" target="_blank">
              <img
                src="/images/email.png"
                height="40"
                width="40"
                alt=""
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="col-md-1">
            <Link
              to="https://github.com/KPontes/simple-ether-wallet/wiki/FAQ"
              target="_blank"
            >
              <img
                src="/images/faq.png"
                height="40"
                width="40"
                alt=""
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="col-md-1">
            <Link
              to="https://www.linkedin.com/in/krishnanpontes/"
              target="_blank"
            >
              <img
                src="/images/linkedin.png"
                height="40"
                width="40"
                alt=""
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="col-md-8">
            <img src="/images/donate.png" className="cursor-pointer" alt="" />
            <br />SEW depends on the conciousness of users to keep providing a
            free service. Please support us by donating Ethereum or Bitcoin to
            the following addresses:
            <p />ETH:{" "}
            <font color="#000077">
              0x02D23d435cAE96924a4a7b7C46e1A674b6E3c2FD{" "}
            </font>
            <br />BTC:{" "}
            <font color="#000077"> 1P7k5oc5UdKW2661iHgnQJs1xTP9V6oqcx </font>
          </div>
        </div>
      </div>
      <p />
    </div>
  );
};

export default Contact;
