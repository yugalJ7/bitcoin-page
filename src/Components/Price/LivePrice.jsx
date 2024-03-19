import React, { useEffect, useState } from "react";
import "./price.scss";
import { LuIndianRupee } from "react-icons/lu";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

const URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true";

const LivePrice = () => {
  const [bitcoinData, setBitcoinData] = useState({});

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setBitcoinData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPrice();
  }, []);

  return (
    <>
      <div>
        {bitcoinData && bitcoinData.bitcoin && (
          <>
            <p>${bitcoinData.bitcoin.usd.toLocaleString()}.04</p>
            <p>
              <LuIndianRupee style={{ fontWeight: "600" }} />

              {bitcoinData.bitcoin.inr.toLocaleString()}
            </p>
          </>
        )}
      </div>
      <div>
        {bitcoinData &&
          bitcoinData.bitcoin &&
          bitcoinData.bitcoin.usd_24h_change && (
            <>
              {bitcoinData.bitcoin.usd_24h_change < 0 ? (
                <button
                  className="redButton"
                  style={{
                    padding: "5px 5px",
                  }}
                >
                  <BiSolidDownArrow size={12} />
                  {bitcoinData.bitcoin.usd_24h_change.toFixed(2)}%
                </button>
              ) : (
                <button>
                  <BiSolidUpArrow size={12} />
                  {bitcoinData.bitcoin.usd_24h_change.toFixed(2)}%
                </button>
              )}
            </>
          )}

        <span>(24H)</span>
      </div>
    </>
  );
};

export default LivePrice;
