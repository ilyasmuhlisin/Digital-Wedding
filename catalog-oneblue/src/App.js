import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cover from "./components/Cover";
import Home from "./components/Home";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman Cover */}
        <Route path="/" element={<Cover />} />

        {/* Route untuk halaman Home */}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
