import React from "react";
import { ReactComponent as Edusvg } from "./svgs/edu.svg";
import { ReactComponent as Linesvg } from "./svgs/line_education.svg";
import Edupng from "./../assets/images/edu.png";



const Education = () => {
  return (
    <section className="relative w-full "
      style={{
      backgroundColor: "#A5DBFF"
      }}>

      {/* <Linesvg style={{
          postition: "absolute",
        left: "-50%",
        // top: "50%",
        // transform: "translate(-50%,-50%)",
        zIndex: "-1",
      }} /> */}
      <div className=" container py-4 mx-auto max-w-5xl flex flex-col md:flex-row md:justify-between items-center  ">
      
      <div className="h-auto">
        {/* <Edusvg/> */}
          <img src={Edupng} alt=""
            style={{
            width: "20em"
          }}/>
        
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
