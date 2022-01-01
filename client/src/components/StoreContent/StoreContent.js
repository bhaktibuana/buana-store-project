import React, { useState } from "react";
import "./StoreContent.css";
import { BsFillFunnelFill } from "react-icons/bs";

const StoreContent = ({ product }) => {
  const [filterItem, setFilterItem] = useState("All");

  const cardStyle = {
    width: "auto",
    "box-shadow": "rgb(0 0 0 / 4%) 0px 7px 11px",
    border: "none",
    "z-index": "0",
  };

  return (
    <>
      <div className="content-container">
        <div className="top-content-container">
          <nav aria-label="breadcrumb">
            {filterItem === "All" ? (
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Store</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {product}
                </li>
              </ol>
            ) : (
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Store</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">{product}</a>
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

        <div className="thumbnail-card-container">
          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-1.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-2.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-1.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-2.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-1.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-2.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-1.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-2.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-1.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-2.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-1.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-2.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-1.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-2.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-1.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-2.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-1.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-2.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-1.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle}>
            <img
              src={require("../../img/img-dummy-2.jpg")}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Uniqlo x Yoasobi T-Shirt UT Original Japan - Yoru Ni Kakeru
                (Male)
              </h5>
              <p className="card-text">
                Size: XS
                <br />
                Rp.350.000,- <del>Rp.375.000,-</del>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreContent;
