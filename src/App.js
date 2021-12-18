import React from "react";
import "./output.css";
import Bio from "./components/bio";
import Education from "./components/education";
import Navbar from "./components/navbar";
import Tools from "./components/tools";

const App = () => {
  return (
    <div className="container flex flex-col items-center py-4 mx-auto">
      <header className="flex flex-row max-w-screen-lg w-full justify-between">
        <span className="text-4xl font-bold justify-between">NKIKK</span>
        <Navbar className=""></Navbar>
      </header>
      <div className="content max-w-screen-lg w-full">
        <Bio />
        <Education />
        <Tools />
        <section id="skills"></section>
        <section id="works"></section>
      </div>
      <footer></footer>
    </div>
  );
};

export default App;
