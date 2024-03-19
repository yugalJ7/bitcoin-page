import React from "react";
import { NavLink } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import "./overview.scss";

const Overview = () => {
  return (
    <section className="overview">
      <div className="overview-navbar">
        <ul>
          <li>
            <NavLink href="/">Overview</NavLink>
          </li>
          <li>
            <NavLink href="/">Fundamentals</NavLink>
          </li>
          <li>
            <NavLink href="/">News Insights</NavLink>
          </li>
          <li>
            <NavLink href="/">Sentiments</NavLink>
          </li>
          <li>
            <NavLink href="/">Team</NavLink>
          </li>
          <li>
            <NavLink href="/">Technicals</NavLink>
          </li>
          <li>
            <NavLink href="/">Tokenomics</NavLink>
          </li>
        </ul>
      </div>
      <div className="overview-content">
        <div className="performance">
          <p>Performance</p>
        </div>
        <div className="today-bar">
          <div className="bar__low">
            <p>Today's Low</p>
            <p>46,930.22</p>
          </div>
          <ProgressBar />
          <div className="progress-bar__tracker">
            <MdOutlineArrowDropUp size={25} />
            <p>$48,637.83</p>
          </div>
          <div className="bar__high">
            <p>Today's High</p>
            <p>49,743.83</p>
          </div>
        </div>
        <div className="today-bar">
          <div className="bar__low">
            <p>52W Low</p>
            <p>16,930.22</p>
          </div>
          <ProgressBar />
          <div className="bar__high">
            <p>52W High</p>
            <p>49,743.83</p>
          </div>
        </div>
        <div className="fundamentals">
          <p>Fundamentals</p>
          <MdInfo size={20} style={{ fill: "#AAB9BF" }} />
        </div>
        <div className="grid__fundamental">
          <div className="grid__fundamental-one">
            <p>Bitcoin Price</p>
            <p>$16,815.46</p>
          </div>
          <div className="grid__fundamental-two">
            <p>Market One</p>
            <p>$323,507,290,047</p>
          </div>
          <div className="grid__fundamental-three">
            <p>24h Low / 24h High</p>
            <p>$16,382.07 / $16,874.12</p>
          </div>
          <div className="grid__fundamental-four">
            <p>Market Cap Dominance</p>
            <p>38.343%</p>
          </div>
          <div className="grid__fundamental-five">
            <p>7d Low / 7d High</p>
            <p>$16,382.07 / $16,874.12</p>
          </div>
          <div className="grid__fundamental-six">
            <p>Volume / Market Cap</p>
            <p>$16,382.07 / $16,874.12</p>
          </div>
          <div className="grid__fundamental-seven">
            <p>Trading Volume</p>
            <p>$23,249,202,782</p>
          </div>
          <div className="grid__fundamental-eight">
            <p>All-Time High</p>
            <div>
              <p>
                $69,044.77 <span className="red">-75.6%</span>
              </p>
              <p>Nov 10, 2021 (about 1 year)</p>
            </div>
          </div>
          <div className="grid__fundamental-nine">
            <p>Market Cap Rank</p>
            <p>#1</p>
          </div>
          <div className="grid__fundamental-ten">
            <p>All-Time Low</p>
            <div>
              <p>
                $67.81 <span className="green">24729.1%</span>
              </p>
              <p>Jul 06, 2013 (about 9 year)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
