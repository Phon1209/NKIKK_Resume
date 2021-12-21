import React from "react";
import { ReactComponent as Edusvg } from "./svgs/edu.svg";

const Education = () => {
  return (
    <section className="flex flex-col md:flex-row p-3 md:justify-between items-center my-12 bg-blue-200">
      <div className="h-auto">
        <Edusvg/>
        
      </div>
      <div className="m-10 p-3 my-auto flex flex-col items-center">
        <span className="text-3xl font-bold">Education</span>
        <p className="text-2xl py-4 text-center">
          Computer Engineering, Chulalongkorn University
        </p>
      </div>
    </section>
  );
};

export default Education;
