import React, { useState, useEffect } from "react";
import "./StoreContent.css";
import {
  BsFillFunnelFill,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import ThumbnailCard from "../ThumbnailCard/ThumbnailCard";
import ProductDetails from "../ProductDetails/ProductDetails";

const StoreContent = (props) => {
  const [productItems, setProductItems] = useState(null);
  const [alertStatus, setAlertStatus] = useState(false);
  const [productDetail, setProductDetail] = useState(false);
  const [itemSelectedCode, setItemSelectedCode] = useState(null);
  const [productItemsObj, setProductItemsObj] = useState(null);
  const [productSelectedObj, setProductSelectedObj] = useState(null);
  const [pageNumberLength, setPageNumberLength] = useState(null);
  const [pageNumberView, setPageNumberView] = useState(null);
  const [showStartPage, setShowStartPage] = useState(false);
  const [showEndPage, setShowEndPage] = useState(false);

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

  const tagStrToArray = (str) => {
    return str.split(", ");
  };

  const productItemsHandler = (array) => {
    const sliceFirstArgument = (props.currentPageNumber - 1) * 10;
    const sliceSecondArgument = props.currentPageNumber * 10;

    if (props.storeObj.product === "All Products") {
      if (props.filterItem === "All") {
        thumbnailCardView(array, sliceFirstArgument, sliceSecondArgument);
      } else {
        const arrFilter = array.filter((data) => {
          return tagStrToArray(data.tag).some((value) => {
            return value === props.filterItem.toLowerCase();
          });
        });

        thumbnailCardView(arrFilter, sliceFirstArgument, sliceSecondArgument);
      }
    } else {
      if (props.filterItem === "All") {
        const arrFilter = array.filter((data) => {
          return tagStrToArray(data.tag).some((value) => {
            return value === props.storeObj.product.toLowerCase();
          });
        });

        thumbnailCardView(arrFilter, sliceFirstArgument, sliceSecondArgument);
      } else {
        const arrFilter = array.filter((data) => {
          return (
            tagStrToArray(data.tag).some((value) => {
              return value === props.storeObj.product.toLowerCase();
            }) &&
            tagStrToArray(data.tag).some((value) => {
              return value === props.filterItem.toLowerCase();
            })
          );
        });

        thumbnailCardView(arrFilter, sliceFirstArgument, sliceSecondArgument);
      }
    }
  };

  const productItemsObjHandler = (array) => {
    setProductItemsObj(array);
  };

  const productSelectedObjHandler = (array) => {
    setProductSelectedObj(
      array.filter((product) => product.code === itemSelectedCode)
    );
  };

  const pageNumberViewHandler = () => {
    const temp = [];
    const totalPage = pageNumberLength;
    const currentPage = props.currentPageNumber;
    let startPage = currentPage < 5 ? 1 : currentPage - 2;
    let endPage = 4 + startPage;
    endPage = totalPage < endPage ? totalPage : endPage;
    let diff = startPage - endPage + 4;
    startPage = startPage - (startPage - diff > 0 ? diff : 0);

    setShowStartPage(false);
    setShowEndPage(false);

    if (startPage > 1) {
      setShowStartPage(true);
    }

    for (let i = startPage; i <= endPage; i++) {
      temp.push(i);
    }

    setPageNumberView(
      temp.map((number) => {
        if (number === currentPage) {
          return (
            <button className="content-number-active">
              {props.currentPageNumber}
            </button>
          );
        } else {
          return (
            <button
              className="content-number"
              onClick={(e) => {
                props.setCurrentPageNumber(number);
              }}
            >
              {number}
            </button>
          );
        }
      })
    );

    if (endPage < totalPage) {
      setShowEndPage(true);
    }
  };

  useEffect(() => {
    if (productItems === null) {
      fetchProductItem().then((result) => {
        productItemsHandler(result);
        productItemsObjHandler(result);
        pageNumberViewHandler();
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

  useEffect(() => {
    fetchProductItem().then((result) => {
      productItemsHandler(result);
      productItemsObjHandler(result);
    });

    pageNumberViewHandler();
  }, [props.currentPageNumber, props.filterItem, pageNumberLength, props.storeObj.product]);

  return (
    <>
      <div className="content-container">
        <div className="alert-container" style={alertContainerStyle}>
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            🎉<strong>Happy New Year!</strong>🎉 Enjoy shopping with{" "}
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
            {props.filterItem === "All" ? (
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a
                    href={"#/"}
                    onClick={(e) => {
                      props.setProductName("All Products");
                      props.setFilterItem("All");
                      props.setCurrentPageNumber(1);
                    }}
                  >
                    Store
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {props.storeObj.product}
                </li>
              </ol>
            ) : (
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a
                    href={"#/"}
                    onClick={(e) => {
                      props.setProductName("All Products");
                      props.setFilterItem("All");
                      props.setCurrentPageNumber(1);
                    }}
                  >
                    Store
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a
                    href={"#/"}
                    onClick={(e) => {
                      props.setFilterItem("All");
                      props.setCurrentPageNumber(1);
                    }}
                  >
                    {props.storeObj.product}
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {props.filterItem}
                </li>
              </ol>
            )}
          </nav>

          <div className="filter-container">
            <button className="filter">
              <BsFillFunnelFill />
              <p>{props.filterItem}</p>
            </button>

            <div className="filter-dropdown-container">
              <div className="filter-dropdown">
                <button
                  className="filter-dropdown-item"
                  onClick={(e) => {
                    props.setFilterItem("All");
                    props.setCurrentPageNumber(1);
                  }}
                >
                  All
                </button>
                <button
                  className="filter-dropdown-item"
                  onClick={(e) => {
                    props.setFilterItem("Male");
                    props.setCurrentPageNumber(1);
                  }}
                >
                  Male
                </button>
                <button
                  className="filter-dropdown-item"
                  onClick={(e) => {
                    props.setFilterItem("Female");
                    props.setCurrentPageNumber(1);
                  }}
                >
                  Female
                </button>
                <button
                  className="filter-dropdown-item"
                  onClick={(e) => {
                    props.setFilterItem("Unisex");
                    props.setCurrentPageNumber(1);
                  }}
                >
                  Unisex
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail-card-container">{productItems}</div>

        <div className="content-number-container">
          {props.currentPageNumber === 1 ? (
            <button className="arrow-number" disabled>
              <BsChevronLeft />
            </button>
          ) : (
            <button
              className="arrow-number"
              onClick={(e) => {
                props.setCurrentPageNumber(props.currentPageNumber - 1);
              }}
            >
              <BsChevronLeft />
            </button>
          )}

          {showStartPage ? (
            <>
              <button
                className="content-number"
                onClick={(e) => {
                  props.setCurrentPageNumber(1);
                }}
              >
                1
              </button>
              <button className="content-number" disabled>
                ...
              </button>
            </>
          ) : (
            ""
          )}

          {pageNumberView}

          {showEndPage ? (
            <>
              <button className="content-number" disabled>
                ...
              </button>
              <button
                className="content-number"
                onClick={(e) => {
                  props.setCurrentPageNumber(pageNumberLength);
                }}
              >
                {pageNumberLength}
              </button>
            </>
          ) : (
            ""
          )}

          {props.currentPageNumber === pageNumberLength ? (
            <button className="arrow-number" disabled>
              <BsChevronRight />
            </button>
          ) : (
            <button
              className="arrow-number"
              onClick={(e) => {
                props.setCurrentPageNumber(props.currentPageNumber + 1);
              }}
            >
              <BsChevronRight />
            </button>
          )}
        </div>
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
        wishlist={
          productSelectedObj !== null ? productSelectedObj[0].wishlist : ""
        }
        cart={productSelectedObj !== null ? productSelectedObj[0].cart : ""}
        price={productSelectedObj !== null ? productSelectedObj[0].price : ""}
        discount={
          productSelectedObj !== null ? productSelectedObj[0].discount : ""
        }
        productSelectedObj={productSelectedObj}
      />
    </>
  );
};

export default StoreContent;
