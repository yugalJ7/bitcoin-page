import React from "react";
import { useState, useEffect } from "react";
import "./CarouselBar.scss";
const url = "https://api.coingecko.com/api/v3/search/trending";

const CarouselBar = () => {
  const [otherCoins, setOtherCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const items = data.coins;
      setOtherCoins(items);
    };
    fetchData();
  }, []);

  return (
    <div
      className="carousel-bar"
      style={{ display: "flex", overflowX: "scroll", gap: "10px" }}
    >
      {otherCoins.map((coin) => {
        const val = coin.item.data.price_change_percentage_24h.aed;
        const roundOffVal = val.toFixed(2);

        return (
          <div className="carousel-bar__containers" key={coin.item.id}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "1rem",
              }}
            >
              <img
                style={{
                  width: "1.6rem",
                  height: "1.6rem",
                  borderRadius: "50%",
                }}
                src={coin.item.small}
                alt={coin.item.id}
              />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  paddingLeft: "5px",
                  letterSpacing: "0.3px",
                }}
              >
                {coin.item.symbol}
              </p>

              {roundOffVal < 0 ? (
                <button
                  className="redButton"
                  style={{
                    padding: "5px 5px",
                  }}
                >
                  {roundOffVal}%
                </button>
              ) : (
                <button>{roundOffVal}%</button>
              )}
            </div>

            <p style={{ margin: "0px 0px 5px 0px", paddingLeft: "1rem" }}>
              {coin.item.data.price}
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  width: "9rem",
                  height: "3rem",
                  textAlign: "center",
                }}
                src={coin.item.data.sparkline}
                alt={coin.item.id}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselBar;
