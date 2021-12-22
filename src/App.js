import React from "react";
import "./output.css";
import Bio from "./components/bio";
import Education from "./components/education";
import Navbar from "./components/navbar";
import Tools from "./components/tools";
import Skills from "./components/skills";
import Works from "./components/works";
import Contact from "./components/contact"

const App = () => {
  return (
    <div className=" flex flex-col items-center py-4 mx-auto">
      <div className="container">
        <header className="flex flex-row max-w-screen-lg w-full justify-between">
        <span className="text-4xl font-bold justify-between">NKIKK</span>
        <Navbar className=""></Navbar>
        </header>
        <div className="content max-w-screen-lg w-full">
          <Bio />
        </div>
      </div>
      
      <Education />
      <div className="container">
        <Tools />
        <Skills/>
        <Works/>

      </div>
        
      <Contact/>
    </div>
  );
};

export default App;
