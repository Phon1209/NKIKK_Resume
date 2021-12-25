import React from "react";
import { ReactComponent as Linesvg } from "./svgs/line_education.svg";
import Edupng from "./../assets/images/edu.png";



const Education = () => {
  return (
    <section className="relative w-full "
      style={{
        backgroundColor: "#A5DBFF",
        overflow:"hidden"
      }}>

      <div className="container py-4 mx-auto max-w-5xl flex flex-col md:flex-row md:justify-between items-center  ">
      <Linesvg className="absolute left-14 md:static md:mx-10 block z-10" />
      
      <div className="h-auto">
        {/* <Edusvg/> */}
          <img src={Edupng} alt="" className="w-1/3 md:w-80 mx-auto"/>
        
      </div>
      <div className="m-3 p-3 my-auto flex flex-col items-center">
        <span className="text-3xl font-bold">Education</span>
        <p className="text-xl py-4 text-center w-1/2 md:w-auto">
          Computer Engineering, Chulalongkorn University
        </p>
      </div>
      </div>
    </section>
  );
};

export default Education;
