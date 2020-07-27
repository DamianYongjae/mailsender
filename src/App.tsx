import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./style.css";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
