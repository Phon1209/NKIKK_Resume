import React from "react";
import { ReactComponent as Edusvg } from "./svgs/edu.svg";
import { ReactComponent as Linesvg } from "./svgs/line_education.svg";


const Education = () => {
  return (
    <section className="w-full relative"
      style={{
      backgroundColor: "#A5DBFF"
    }}>
      {/* <Linesvg style={{
          postition: "absolute",
        // right: "-100",
        // top: "50%",
        // transform: "translate(-50%,-50%)",
        zIndex: "-1",
      }} /> */}
      
      <div className="container py-4 mx-auto flex flex-col md:flex-row p-3 md:justify-between items-center my-12 ">
      <div className="h-auto">
        <Edusvg/>
        
      </div>
      <div className="m-10 p-3 my-auto flex flex-col items-center">
        <span className="text-3xl font-bold">Education</span>
        <p className="text-2xl py-4 text-center">
          Computer Engineering, Chulalongkorn University
        </p>
      </div>
      </div>
    </section>
  );
};

export default Education;
