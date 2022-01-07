import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Store from "./pages/Store/Store";
import { apiURL } from "./api/apiURL";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Store apiURL={apiURL} />} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
