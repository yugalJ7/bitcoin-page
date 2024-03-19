import React from "react";
import "./YouMayAlsoLike.scss";
import CarouselBar from "./CarouselBar/CarouselBar";

const YouMayAlsoLike = () => {
  return (
    <section className="like">
      <div className="like-container">
        <p
          className="heading"
          style={{
            marginBottom: "1rem",
            paddingTop: window.innerWidth > "430px" ? "4rem" : "0.5rem",
          }}
        >
          You may Also Like
        </p>
        <CarouselBar />
        <p
          className="heading"
          style={{ marginBottom: "1rem", paddingTop: "12px" }}
        >
          Trending Coins
        </p>
        <CarouselBar />
      </div>
    </section>
  );
};

export default YouMayAlsoLike;
