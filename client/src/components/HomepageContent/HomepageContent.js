import React, { useState, useEffect } from "react";
import AlertSuccess from "../AlertSuccess/AlertSuccess";
import StoreCarousel from "../StoreCarousel/StoreCarousel";
import "./HomepageContent.css";
import {
  BsFillFunnelFill,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import ThumbnailCard from "../ThumbnailCard/ThumbnailCard";

const HomepageContent = (props) => {
  const [filterItem, setFilterItem] = useState("All");
  const [productItems, setProductItems] = useState(null);
  const [productDetail, setProductDetail] = useState(false);
  const [itemSelectedCode, setItemSelectedCode] = useState(null);
  const [pageNumberLength, setPageNumberLength] = useState(null);

  const fetchProductItem = async () => {
    const productItemsArr = await props.storeObj.getProducts;

    return productItemsArr;
  };

  const thumbnailCardView = (
    array,
    sliceFirstArgument,
    sliceSecondArgument
  ) => {
    if (array.length % 10 === 0) {
      setPageNumberLength(Math.floor(array.length / 10));
    } else {
      setPageNumberLength(Math.floor(array.length / 10) + 1);
    }

    setProductItems(
      array.slice(sliceFirstArgument, sliceSecondArgument).map((item) => {
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

  const productItemsHandler = (array) => {
    const sliceFirstArgument = (props.storeObj.currentPageNumber - 1) * 10;
    const sliceSecondArgument = props.storeObj.currentPageNumber * 10;

    if (props.storeObj.productName === "All Products") {
      if (filterItem === "All") {
        thumbnailCardView(array, sliceFirstArgument, sliceSecondArgument)
      }
    }
  };

  useEffect(() => {
    if (productItems === null) {
      fetchProductItem().then((result) => {
        productItemsHandler(result);
        console.log(result)
      });
    }
  });

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

        <div className="homepage-thumbnail-card-container">{productItems}</div>
      </div>
    </>
  );
};

export default HomepageContent;
