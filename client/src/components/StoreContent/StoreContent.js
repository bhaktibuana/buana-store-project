import React, { useState } from "react";
import "./StoreContent.css";
import { BsFillFunnelFill } from "react-icons/bs";
import ThumbnailCard from "../ThumbnailCard/ThumbnailCard";

const StoreContent = (props) => {
  const [filterItem, setFilterItem] = useState("All");

  const showProductsItem = props.storeObj.getProducts
    .slice(0, 10)
    .map((item) => {
      return (
        <ThumbnailCard
          productName={item.name}
          productSize={item.size}
          productPrice={item.price}
          productDiscount={item.discount}
          productCode={item.code}
        />
      );
    });

  return (
    <>
      {console.log(props.storeObj.getProducts)}
      <div className="content-container">
        <div className="top-content-container">
          <nav aria-label="breadcrumb">
            {filterItem === "All" ? (
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Store</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {props.storeObj.product}
                </li>
              </ol>
            ) : (
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Store</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">{props.storeObj.product}</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {filterItem}
                </li>
              </ol>
            )}
          </nav>

          <div className="filter-container">
            <button className="filter">
              <BsFillFunnelFill />
              <p>{filterItem}</p>
            </button>

            <div className="filter-dropdown-container">
              <div className="filter-dropdown">
                <button
                  className="filter-dropdown-item"
                  onClick={(e) => setFilterItem("All")}
                >
                  All
                </button>
                <button
                  className="filter-dropdown-item"
                  onClick={(e) => setFilterItem("Male")}
                >
                  Male
                </button>
                <button
                  className="filter-dropdown-item"
                  onClick={(e) => setFilterItem("Female")}
                >
                  Female
                </button>
                <button
                  className="filter-dropdown-item"
                  onClick={(e) => setFilterItem("Unisex")}
                >
                  Unisex
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail-card-container">{showProductsItem}</div>
      </div>
    </>
  );
};

export default StoreContent;
