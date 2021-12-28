import React, { useState,useRef } from "react";
import PropTypes from "prop-types";
import { imageSet } from "./imageSources";

const Dot = ({ current }) => {
  return (
    <div
      className={`${current ? "bg-pink-400 w-2 h-2" : "bg-gray-200 w-1.5 h-1.5"} 
                  rounded-full  m-2`}
    />
  );
};

const ImageSlider = ({ imageID }) => {
  const images = imageSet[imageID];
  const Slider = useRef(null);
  const [currImg, setCurrImg] = useState(0);

  const changeImage = (indexChange) => {
    let targetIndex = (currImg + indexChange) % images.length;
    if (targetIndex < 0) targetIndex += images.length;
    const panel = Slider.current;
    setTimeout(() => {
      panel.classList.add("opacity-0");
      setTimeout(() => setCurrImg(targetIndex), 150);
      setTimeout(() => {
        panel.classList.remove("opacity-0");
      }, 150);
    }, 0);
  };

  const renderDots = () => {
    return [...Array(images.length).keys()].map((index) => {
      return <Dot key={index} current={currImg === index} />;
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="image-slider transition-opacity" ref={Slider}>
        <div className="hoverLeft">
          <div
            className="image-prev opacity-0 hover:opacity-100"
            onClick={(e) => changeImage(-1)}
          >
            <div className="w-full top-0 left-0 h-full"></div>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
        </div>
        <div className="hoverRight">
          <div
            className="image-next opacity-0 hover:opacity-100"
            onClick={(e) => changeImage(1)}
          >
            <div className="w-full top-0 left-0 h-full"></div>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
        <img
          src={`${images[currImg].img}`}
          alt={`Set ID: ${imageID}`}
          width="800"
          height="600"
          style={{
            height: "auto",
            width: "100%",
          }}
        />
      </div>
      <div className="flex m-4 justify-center items-center">{renderDots()}</div>
    </div>
  );
};

ImageSlider.propTypes = {
  imageID: PropTypes.number,
};

export default ImageSlider;
