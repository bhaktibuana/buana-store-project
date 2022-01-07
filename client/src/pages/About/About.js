import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./About.css";

const About = () => {
  const storeObj = {
    page: "store",
  };

  return (
    <>
      <Sidebar storeObj={storeObj} />
      <div className="page-container">
        <div className="page-content">
          <div className="page-content-container">
            asd
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
