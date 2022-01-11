import React, { useState } from "react";
import AlertSuccess from "../AlertSuccess/AlertSuccess";
import StoreCarousel from "../StoreCarousel/StoreCarousel";
import "./HomepageContent.css";
import {
  BsFillFunnelFill,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

const HomepageContent = () => {
  const [filterItem, setFilterItem] = useState("All");

  return (
    <>
      <div className="homepage-carousel-container">
        <StoreCarousel />
      </div>

      <div className="homepage-content-container">
        <div className="homepage-top-content-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#/">Store</a>
              </li>
              <li className="breadcrumb-item active">All Products</li>
            </ol>
          </nav>

          <div className="homepage-filter-container">
            <button className="homepage-filter">
              <BsFillFunnelFill />
              <p>{filterItem}</p>
            </button>

            <div className="homepage-filter-dropdown-container">
              <div className="homepage-filter-dropdown">
                <button
                  className="filter-dropdown-item"
                  onClick={() => {
                    setFilterItem("All");
                  }}
                >
                  All
                </button>

                <button
                  className="filter-dropdown-item"
                  onClick={() => {
                    setFilterItem("Male");
                  }}
                >
                  Male
                </button>

                <button
                  className="filter-dropdown-item"
                  onClick={() => {
                    setFilterItem("Female");
                  }}
                >
                  Female
                </button>
                
                <button
                  className="filter-dropdown-item"
                  onClick={() => {
                    setFilterItem("Unisex");
                  }}
                >
                  Unisex
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="homepage-alert-container">
          <AlertSuccess />
        </div>
      </div>
    </>
  );
};

export default HomepageContent;
