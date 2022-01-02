import React, { useState, useEffect } from "react";
import "./StoreContent.css";
import { BsFillFunnelFill } from "react-icons/bs";
import ThumbnailCard from "../ThumbnailCard/ThumbnailCard";

const StoreContent = (props) => {
  const [filterItem, setFilterItem] = useState("All");
  const [productItems, setProductItems] = useState(null);
  const [alertStatus, setAlertStatus] = useState(false);

  const alertContainerStyle = {
    display: alertStatus ? "none" : "block",
  };

  const alertStatusHandler = () => {
    setAlertStatus(true);
  };

  const fetchProductItem = async () => {
    const productItemsArr = await props.storeObj.getProducts;

    return productItemsArr;
  };

  const productItemsHandler = (array) => {
    setProductItems(
      array.slice(0, 10).map((item) => {
        return (
          <ThumbnailCard
            productName={item.name}
            productSize={item.size}
            productPrice={item.price}
            productDiscount={item.discount}
            productCode={item.code}
          />
        );
      })
    );
  };

  useEffect(() => {
    if (productItems === null) {
      fetchProductItem().then((result) => {
        productItemsHandler(result);
      });
    }
  });

  return (
    <>
      <div className="content-container">
        <div className="alert-container" style={alertContainerStyle}>
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            🎉🎉🎉<strong>Happy New Year!</strong>🎉🎉🎉 Enjoy shopping with{" "}
            <strong>30% off</strong> until 31-January-2022!
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={alertStatusHandler}
            ></button>
          </div>
        </div>

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

        <div className="thumbnail-card-container">{productItems}</div>
      </div>
    </>
  );
};

export default StoreContent;
