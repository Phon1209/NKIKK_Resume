import React from "react";
import ImageSlider from "./works/imageSlider";
import workDetail from "./works/workDetails.json";

const Works = () => {
  return (
    <section className="py-6">
      <span className="text-3xl font-bold text-center block mx-auto my-6">
        My works
      </span>
      {workDetail.map((element, index) => {
        return (
          <div key={index} className="mx-auto md:flex md:items-center">
            <ImageSlider imageID={index} className="md:flex-1" />
            <div className="m-6 p-4 md:flex-1">
              <span className="text-3xl font-bold text-center">
                {element.title}
              </span>
              <p className="text-sm">{element.timeframe}</p>
              <p className="text-sm my-4">{element.desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Works;
