import React from "react";
import "./output.css";
import Bio from "./components/bio";
import Education from "./components/education";
import Navbar from "./components/navbar";
import Tools from "./components/tools";
import Skills from "./components/skills";
import Works from "./components/works";
import Contact from "./components/contact";
import { ReactComponent as Bgsvg } from "./components/svgs/bg_bio.svg";
import Nkikk_logo from "./assets/images/nkikk_logo.png";

const App = () => {
  return (
    <div className=" flex flex-col items-center  mx-auto max-w-7xl w-full">
      <div className="container flex flex-col items-center  mx-auto relative">
        {/* <Bgsvg
          style={{
            position: "absolute",
            zIndex: "-1",
            left: "0",
            top: "0",
            width: "40vh",
            height:"50vh"
          }}/> */}
        <header className="flex flex-row max-w-screen-lg w-full justify-between p-4">
          <img src={Nkikk_logo} alt=""
            style={{
            width: "100px"
          }}/>
        <Navbar className=""></Navbar>
        </header>
        <div className="content max-w-screen-lg w-full">
          <Bio />
        </div>
      </div>
      
      <Education />
      <Tools />
      <div className="container">
        <Skills/>
        <Works/>

      </div>
        
      <Contact/>
    </div>
  );
};

export default App;
