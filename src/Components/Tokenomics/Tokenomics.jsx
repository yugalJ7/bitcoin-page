import React from "react";
import "./tokenomics.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Tokenomics = () => {
  return (
    <section className="tokenomics">
      <div className="tokenomics-content">
        <p className="heading mg">Tokenomics</p>
        <p className="tokenomics-sec_head mg">Initial Distribution</p>
        <div className="circular__prog-bar">
          <div>
            <CircularProgressbar
              value={70}
              strokeWidth={16}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: "#007FFF",
                trailColor: "#FAA002",
              })}
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "13px" }}
          >
            <div className="prog-bar__innerDiv">
              <div
                style={{
                  backgroundColor: "#007FFF",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                }}
              ></div>
              <p className="fw mg-0">Crowdsale investors: 80% </p>
            </div>
            <div className="prog-bar__innerDiv">
              <div
                style={{
                  backgroundColor: "#FAA002",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                }}
              ></div>
              <p className="fw mg-0">Foundation: 20% </p>
            </div>
          </div>
        </div>
        <div className="tokenomics-content-about">
          <p className="tokenomics-content">
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
            ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
            bibendum amet enim sit eget leo amet. At metus orci augue fusce
            eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales
            massa habitasse urna felis augue. Gravida aliquam fermentum augue
            eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio
            rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae.
            Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio
            nisi eu ac risus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
