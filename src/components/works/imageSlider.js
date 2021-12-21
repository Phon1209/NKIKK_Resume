import React, { useState } from "react";
import { images } from "./imageSources";

const ImageSlider = () => {
  const [currImg, setCurrImg] = useState(0);

  const changeImage = (indexChange) => {
    const targetIndex = (currImg + indexChange) % images.length;
    setCurrImg(targetIndex);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${images[currImg].img})`,
            backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   backgroundPosition: "left",
          height: "400px",
          width: "500px",
          //   overflow: "hidden",
        }}
        className="relative flex justify-between"
      >
        <div
          className="opacity-0 hover:opacity-100 flex items-center p-6"
          style={
            {
                background: "linear-gradient(90deg, rgba(118, 118, 118, 0.59) 0%, rgba(196, 196, 196, 0) 109.17%), blur(4px)",
                transform: "rotate(-180deg)"
            }
          }
          onClick={() => changeImage(-1)}
        >
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div
          className="opacity-0 hover:opacity-100 flex items-center p-6"
          style={
            {
                background: "linear-gradient(90deg, rgba(118, 118, 118, 0.59) 0%, rgba(196, 196, 196, 0) 109.17%), blur(4px)",
                transform: "rotate(-180deg)"
            }
          }
          onClick={() => changeImage(1)}
        >
          <ion-icon name="arrow-back-outline" className=""></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
