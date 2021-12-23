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

const App = () => {
  return (
    <div className=" flex flex-col items-center py-4 mx-auto max-w-7xl">
      <div className="container flex flex-col items-center py-4 mx-auto relative">
        <Bgsvg
          style={{
            position: "absolute",
            zIndex: "-1",
            left: "-10",
            top: "0",
            width:"20em"
          }}/>
        <header className="flex flex-row max-w-screen-lg w-full justify-between">
        <span className="text-4xl font-bold justify-between">NKIKK</span>
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
