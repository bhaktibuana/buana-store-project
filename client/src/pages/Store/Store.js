import React from "react";
import "./Store.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

const Store = () => {
  const sidebarObj = { page: "store" };

  return (
    <>
      <Sidebar {...sidebarObj} />
      <div className="page-container">
        <div className="page-content">
          <div className="page-content-container">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
