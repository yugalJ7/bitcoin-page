import React from "react";

const ProgressBar = () => {
  return (
    <div className="progress" style={{ height: "5px", width: "65%" }}>
      <div
        className="progress-bar"
        style={{
          height: "100%",
          backgroundImage:
            "linear-gradient(to right, #ff4948, #FF5B00, #FF8C00, #FFAB0F, #A1C935, #69D84F, #0CDC73",
          borderRadius: "5px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
