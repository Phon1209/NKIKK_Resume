import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/home";

const App = () => {
  return (
    <Router>
      <div className="container">
        <header className="header flex">
          <div className="icon flex-1 text-bold">NKIKK</div>
          <div className="flex-3"></div>
          {/* <Navbar className="flex-3" /> */}
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
