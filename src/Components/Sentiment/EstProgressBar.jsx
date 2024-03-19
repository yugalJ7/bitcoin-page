import React from "react";

const ProgressBar = ({ outerWidth, bgColor, mg }) => {
  return (
    <div
      className="progress"
      style={{ height: "8px", width: `${outerWidth}vw`, marginLeft: `${mg}px` }}
    >
      <div
        className="progress-bar"
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: `${bgColor}`,
          borderRadius: "2px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
