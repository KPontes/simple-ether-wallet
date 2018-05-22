import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";

class TokenInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenData: {}
    };
    this.getCoinMarketCap();
  }

  getCoinMarketCap() {
    axios.get("https://api.coinmarketcap.com/v2/ticker/1027/").then(res => {
      const tokenData = res.data;
      this.setState({ tokenData });
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getCoinMarketCap(), 60000);
  }

  render() {
    if (this.state.tokenData.data) {
      var name = this.state.tokenData.data.name;
      var price = this.state.tokenData.data.quotes.USD.price;
      var marketCap = this.state.tokenData.data.quotes.USD.market_cap;
      var percentChange24h = this.state.tokenData.data.quotes.USD
        .percent_change_24h;
      var percentChange1h = this.state.tokenData.data.quotes.USD
        .percent_change_1h;
      var percentChange7d = this.state.tokenData.data.quotes.USD
        .percent_change_7d;
    }
    return (
      <div>
        <div className="tokeninfo-div">
          <small>
            <table>
              <tbody>
                <tr>
                  <td>Token:</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>Price:</td>
                  <td>
                    <NumberFormat
                      value={price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Market Cap:</td>
                  <td>
                    {" "}
                    <NumberFormat
                      value={marketCap}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </td>
                </tr>
                <tr>
                  <td>1h variation:</td>
                  <td>{percentChange1h}%</td>
                </tr>
                <tr>
                  <td>24h variation:</td>
                  <td>{percentChange24h}%</td>
                </tr>
                <tr>
                  <td>7 day variation:</td>
                  <td>{percentChange7d}%</td>
                </tr>
              </tbody>
            </table>
          </small>
        </div>
      </div>
    );
  }
}

export default TokenInfo;
