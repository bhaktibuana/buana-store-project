import React, { useState, useEffect } from "react";
import "./StoreContent.css";
import { BsFillFunnelFill } from "react-icons/bs";
import ThumbnailCard from "../ThumbnailCard/ThumbnailCard";
import ProductDetails from "../ProductDetails/ProductDetails";

const StoreContent = (props) => {
  const [filterItem, setFilterItem] = useState("All");
  const [productItems, setProductItems] = useState(null);
  const [alertStatus, setAlertStatus] = useState(false);
  const [productDetail, setProductDetail] = useState(false);
  const [itemSelectedCode, setItemSelectedCode] = useState(null);
  const [productItemsObj, setProductItemsObj] = useState(null);
  const [productSelectedObj, setProductSelectedObj] = useState(null);

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
            setProductDetail={setProductDetail}
            setItemSelectedCode={setItemSelectedCode}
          />
        );
      })
    );
  };

  const productItemsObjHandler = (array) => {
    setProductItemsObj(array);
  };

  const productSelectedObjHandler = (array) => {
    setProductSelectedObj(
      array.filter((product) => product.code === itemSelectedCode)
    );
  };

  useEffect(() => {
    if (productItems === null) {
      fetchProductItem().then((result) => {
        productItemsHandler(result);
        productItemsObjHandler(result);
      });
    }
  });

  useEffect(() => {
    if (itemSelectedCode !== null) {
      productSelectedObjHandler(productItemsObj);
      if (productSelectedObj !== null) {
        setItemSelectedCode(null);
      }
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
            🎉🎉🎉<strong>Happy New Year!</strong>🎉 Enjoy shopping with{" "}
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

      <ProductDetails
        show={productDetail}
        onHide={() => {
          setProductDetail(false);
          setProductSelectedObj(null);
          setItemSelectedCode(null);
        }}
        name={productSelectedObj !== null ? productSelectedObj[0].name : ""}
        description={
          productSelectedObj !== null ? productSelectedObj[0].description : ""
        }
        code={productSelectedObj !== null ? productSelectedObj[0].code : ""}
        size={productSelectedObj !== null ? productSelectedObj[0].size : ""}
        tag={productSelectedObj !== null ? productSelectedObj[0].tag : ""}
        wishlist={productSelectedObj !== null ? productSelectedObj[0].wishlist : ""}
        cart={productSelectedObj !== null ? productSelectedObj[0].cart : ""}
        price={productSelectedObj !== null ? productSelectedObj[0].price : ""}
        productSelectedObj={productSelectedObj}
      />
    </>
  );
};

export default StoreContent;
