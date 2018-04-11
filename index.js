const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Welcome to eth-Wallet Express Server" });
});

app.listen(5000);
