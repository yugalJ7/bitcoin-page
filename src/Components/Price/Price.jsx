import React from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import "./price.scss";
import Chart from "./Chart";
import LivePrice from "./LivePrice";

const Price = () => {
  return (
    <section className="price">
      <div className="track-pages">
        <p>Cryptocurrencies </p>
        <HiOutlineChevronDoubleRight
          style={{ color: "#3e5764", fontSize: "12px" }}
        />
        <p>Bitcoin</p>
      </div>
      <div className="price-container">
        <div className="price-bitcoin">
          <img src="src/assets/bitcoin-img.svg" alt="bitcoin img" />
          <p>Bitcoin</p>
          <p>BTC</p>
          <button>Rank #1</button>
        </div>
        <div className="live-bitcoin__price">
          <LivePrice />
        </div>
        <div className="price__chart">
          <span>Bitcoin Price Chart (USD)</span>
          <Chart />
        </div>
      </div>
    </section>
  );
};

export default Price;
