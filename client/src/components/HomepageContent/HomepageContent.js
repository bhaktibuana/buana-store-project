import React from "react";
import AlertSuccess from "../AlertSuccess/AlertSuccess";
import "./HomepageContent.css";

const HomepageContent = () => {
  return (
    <>
      <div className="homepage-content-container">
        <div className="homepage-alert-container">
          <AlertSuccess />

          <div className="homepage-top-content-container">
            <nav aria-label="breadcrumb"></nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageContent;
