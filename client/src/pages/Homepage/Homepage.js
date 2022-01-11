import React, { useState } from "react";
import HomepageContent from "../../components/HomepageContent/HomepageContent";
import NavbarBs from "../../components/NavbarBs/NavbarBs";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        <NavbarBs />
        <HomepageContent />
      </div>
    </>
  );
};

export default Homepage;
