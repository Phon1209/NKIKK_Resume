import React from "react";
import ImageSlider from "./works/imageSlider";
import workDetail from "./works/workDetails.json";

const Works = () => {
  return (
    <section id="work" className="p-6 max-w-7xl w-full">
      <span className="text-3xl font-bold text-center block mx-auto my-6">
        My works
      </span>
      {workDetail.map((element, index) => {
        return (
          <div key={index} className="mx-auto my-6 flex flex-col-reverse lg:flex-row items-center">
            <ImageSlider imageID={index}
              />
            <div className="p-4 pb-0 lg:pb-4 m-6 mb-0 lg:mb-6 flex flex-col items-center lg:items-start" style={{flex:"40%"}} >
              <span className="text-2xl text-center">
                {element.title}
              </span>
              <p className="text-sm">{element.timeframe}</p>
              <p className="text-sm my-4 text-center lg:text-left">{element.desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Works;
