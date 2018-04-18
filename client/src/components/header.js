import React from "react";

const Header = () => {
  return (
    <div>
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <a class="nav-link" href="#">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a>Create Wallet</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">
            View balance
          </a>
        </li>
        <li class="nav-item">
          <a>Send Ether</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Receive Ether
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">
            Contact
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Header;
