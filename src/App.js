import React from "react";
import "./output.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages";

const App = () => (
    <Router>
      <Home/>
    </Router>
  );

export default App;
