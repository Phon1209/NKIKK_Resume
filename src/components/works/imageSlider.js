import React, { useState } from "react";
import PropTypes from "prop-types";
import { imageSet } from "./imageSources";

const ImageSlider = ({ imageID }) => {
  const images = imageSet[imageID];
  const [currImg, setCurrImg] = useState(0);

  const changeImage = (event, indexChange) => {
    let targetIndex = (currImg + indexChange) % images.length;
    if (targetIndex < 0) targetIndex += images.length;
    const panel = event.target.parentNode.parentNode.parentNode;
    setTimeout(() => {
      panel.classList.add("opacity-0");
      setTimeout(() => setCurrImg(targetIndex), 150);
      setTimeout(() => {
        panel.classList.remove("opacity-0");
      }, 150);
    }, 0);
  };

  return (
    <div className="image-slider transition-opacity">
      <div className="hoverLeft">
        <div
          className="image-prev opacity-0 hover:opacity-100"
          onClick={(e) => changeImage(e, -1)}
        >
          <div className="w-full top-0 left-0 h-full"></div>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>

      </div>
      <div className="hoverRight">
        <div
          className="image-next opacity-0 hover:opacity-100"
          onClick={(e) => changeImage(e, 1)}
        >
          <div className="w-full top-0 left-0 h-full"></div>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </div>
      <img
      src={`${images[currImg].img}`}
      width="800"
      height="600"
        style={{
          height:"auto",
          width: "100%",
        }}
    />
    </div>
     
  );
};

ImageSlider.propTypes = {
  imageID: PropTypes.number,
}

export default ImageSlider;
