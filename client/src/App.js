import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Store from "./pages/Store";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Store/>} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
