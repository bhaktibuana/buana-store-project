import React from "react";
import AlertSuccess from "../AlertSuccess/AlertSuccess";
import StoreCarousel from "../StoreCarousel/StoreCarousel";
import "./HomepageContent.css";

const HomepageContent = () => {
  return (
    <>
      <div className="homepage-carousel-container">
        <StoreCarousel />
      </div>

      <div className="homepage-content-container">
        <div className="homepage-top-content-container">
          <nav aria-label="breadcrumb"></nav>
        </div>

        <div className="homepage-alert-container">
            <AlertSuccess />
          </div>
      </div>
    </>
  );
};

export default HomepageContent;
