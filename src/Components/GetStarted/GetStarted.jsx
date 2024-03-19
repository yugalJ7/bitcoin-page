import React from "react";
import "./GetStarted.scss";
import { HiMiniArrowRight } from "react-icons/hi2";

const GetStarted = () => {
  return (
    <section className="getStarted">
      <div className="getStarted-container">
        <p
          className="w-5"
          style={{
            fontSize: window.innerWidth > "430px" ? "1.5rem" : "1.1rem",
            fontWeight: "600",
            width: "17rem",
          }}
        >
          Get Started with KoinX for FREE
        </p>
        <p
          className="w-5"
          style={{
            fontSize: window.innerWidth > "430px" ? "14px" : "12px",
            color: "#DBE1E7",
          }}
        >
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img src="src/assets/getStarted.png" alt="login" />
        <button>
          Get Started for FREE <HiMiniArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
