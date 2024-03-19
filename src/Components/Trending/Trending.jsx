import React, { useEffect, useState } from "react";
import "./Trending.scss";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

const url = "https://api.coingecko.com/api/v3/search/trending";
const Trending = () => {
  const [trendingCoin, setTrendingCoin] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const items = data.coins;
      setTrendingCoin(items);
    };

    fetchData();
  }, []);

  return (
    <section className="trending">
      <div className="trending-container">
        <p className="heading" style={{ marginTop: "0px" }}>
          Trending Coins (24H)
        </p>
        <div>
          {trendingCoin.slice(0, 3).map((coin, index) => {
            const temp = coin.item.data.price_change_percentage_24h.aed;
            const roundOff = temp.toFixed(2);

            return (
              <div
                key={coin.item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "3px" }}
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
                      fontWeight: "480",
                      paddingLeft: "5px",
                      letterSpacing: "0.3px",
                    }}
                  >
                    {coin.item.name}
                  </p>
                  <span style={{ fontSize: "13px", fontWeight: "450" }}>
                    ({coin.item.symbol})
                  </span>
                </div>

                {roundOff < 0 ? (
                  <button
                    className="redButton"
                    style={{
                      padding: "5px 5px",
                    }}
                  >
                    <BiSolidDownArrow size={12} />
                    {roundOff}%
                  </button>
                ) : (
                  <button>
                    <BiSolidUpArrow size={12} />
                    {roundOff}%
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trending;
