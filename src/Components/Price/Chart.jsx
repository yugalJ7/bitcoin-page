import React, { useEffect, useRef, memo } from "react";
import "./price.scss";
function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|7D"
            ]
          ],
          "chartOnly": true,
          "width": "100%",
      
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": true,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|60",
            "1w|30",
            "1m|240",
            "3m|60",
            "6m|120",
            "12m|1D",
            "all|1M"
            
          ],
          "lineColor": "rgba(41, 98, 255, 1)",
          "topColor": "rgba(144, 191, 249, 1)",
          "bottomColor": "rgba(255, 255, 255, 1)",
          "dateFormat": "dd MMM",
          "isTransparent": true
          
        }`;
    container.current.appendChild(script);
  }, []);

  return <div className="tradingview-widget-container" ref={container}></div>;
}

export default memo(TradingViewWidget);
