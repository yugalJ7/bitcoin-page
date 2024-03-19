import React, { useEffect, useRef, useState } from "react";
import { eventData } from "./EventsData";
import "./Carousel.scss";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { AiOutlineRise } from "react-icons/ai";
import { DiDropbox } from "react-icons/di";

const Carousel = ({ eventData }) => {
  const carousel = useRef(null);

  const nextSlide = (shift) => {
    carousel.current.scrollLeft += shift;
  };

  return (
    <div ref={carousel} className="carousel-container">
      <IoIosArrowDroprightCircle
        className="icon"
        onClick={() => nextSlide(100)}
        size={40}
        fill="#BABBBA"
        style={{ cursor: "pointer" }}
      />

      {eventData.map((data, index) => {
        return (
          <div
            className="carousel-item"
            style={{ backgroundColor: data.color }}
            key={data.id}
          >
            <span>
              {data.icon === "IoDocuments" ? (
                <IoDocuments
                  size={22}
                  fill="white"
                  style={{
                    backgroundColor: "#007fff",
                    borderRadius: "50%",
                    padding: "7px",
                  }}
                />
              ) : data.icon === "AiOutlineRise" ? (
                <AiOutlineRise
                  size={22}
                  fill="white"
                  style={{
                    backgroundColor: "#10ba83",
                    borderRadius: "50%",
                    padding: "7px",
                  }}
                />
              ) : data.icon === "DiDropbox" ? (
                <DiDropbox
                  size={22}
                  fill="white"
                  style={{
                    backgroundColor: "#EECAE2",
                    borderRadius: "50%",
                    padding: "7px",
                  }}
                />
              ) : null}
            </span>

            <div>
              <p>{data.heading}</p>
              <p>{data.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
