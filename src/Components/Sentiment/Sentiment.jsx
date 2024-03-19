import React from "react";
import "./sentiment.scss";
import EstProgressBar from "./EstProgressBar";
import { MdInfo } from "react-icons/md";
import Carousel from "./Carousel/Carousel";
import { eventData } from "./Carousel/EventsData";

const Sentiment = () => {
  return (
    <section className="sentiment">
      <div className="sentiment-content">
        <p className="sentiment-main__head">Sentiment</p>
        <div className="sentiment-header">
          <p>Key Events</p>
          <MdInfo size={20} style={{ fill: "#7C7E8C" }} />
        </div>
        <Carousel eventData={eventData} />
        <div className="sentiment-header">
          <p>Analyst Estimates</p>
          <MdInfo size={20} style={{ fill: "#7C7E8C" }} />
        </div>

        <div className="sentiment-analys__progessBar">
          <div className="progressbar__radical">
            <p>76%</p>
          </div>
          <div className="progressbar__linear">
            <div className="progressbar__linear-green">
              <p>Buy</p>
              <EstProgressBar outerWidth={30} bgColor={"#06B48B"} mg={12} />
              <p>76%</p>
            </div>
            <div className="progressbar__grey">
              <p>Hold</p>
              <EstProgressBar outerWidth={2} bgColor={"#C7C8CD"} mg={7} />
              <p>8%</p>
            </div>
            <div className="progressbar__red">
              <p>Sell</p>
              <EstProgressBar outerWidth={5} bgColor={"#F7324C"} mg={13} />
              <p>16%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sentiment;
