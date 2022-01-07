import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./About.css";

const About = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const storeObj = {
    page: "about",
    sidebarStatus,
  };

  return (
    <>
      <Sidebar
        storeObj={storeObj}
        setSidebarStatus={setSidebarStatus}
      />
      <div className="page-container">
        <div className="page-content">
          <div className="page-content-container">
            asd
            <Navbar storeObj={storeObj} setSidebarStatus={setSidebarStatus} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
