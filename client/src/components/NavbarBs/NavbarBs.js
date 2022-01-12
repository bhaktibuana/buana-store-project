import React, { useState } from "react";
import "./NavbarBs.css";
import {
  BsSearch,
  BsCartCheckFill,
  BsFillHeartFill,
  BsList,
  BsFillPersonFill,
} from "react-icons/bs";

const NavbarBs = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="navbar-bs-content">
            <div className="navbar-title-container">
              <div className="navbar-title">
                <a href="/">
                  <div className="navbar-logo">
                    <img
                      src={require("../../img/img-logo-1.png")}
                      alt="navbar-logo"
                    />
                  </div>

                  <p>BUANA STORE</p>
                </a>

                <div id="title-line" className="navbar-title-line"></div>
              </div>

              <div id="small-display" className="navbar-bs-item-right">
                <button className="icon">
                  <BsCartCheckFill size={18} />
                </button>

                <button id="wishlist" className="icon">
                  <BsFillHeartFill size={18} />
                </button>

                <button id="list-icon" className="icon">
                  <BsList size={18} />
                </button>

                <div className="navbar-title-line"></div>

                {/* <button className="icon">
                  <BsFillPersonFill size={18} />
                </button> */}

                <button className="text">Sign In</button>
              </div>
            </div>

            <div className="navbar-bs-item-left">
              <button className="navbar-button-item-left">
                <span>Store</span>
              </button>

              <button id="products-button" className="navbar-button-item-left">
                <span>Products</span>

                <div className="navbar-products-dropdown-container">
                  <div className="navbar-products-dropdown">
                    <button
                      onClick={() => {
                        props.storeObj.setProductName("All Products");
                        props.storeObj.setFilterItem("All");
                        props.storeObj.setCurrentPageNumber(1);
                      }}
                    >
                      All Products
                    </button>

                    <button
                      onClick={() => {
                        props.storeObj.setProductName("Shirt");
                        props.storeObj.setFilterItem("All");
                        props.storeObj.setCurrentPageNumber(1);
                      }}
                    >
                      Shirt
                    </button>

                    <button
                      onClick={() => {
                        props.storeObj.setProductName("Hoodie");
                        props.storeObj.setFilterItem("All");
                        props.storeObj.setCurrentPageNumber(1);
                      }}
                    >
                      Hoodie
                    </button>

                    <button
                      onClick={() => {
                        props.storeObj.setProductName("Pants");
                        props.storeObj.setFilterItem("All");
                        props.storeObj.setCurrentPageNumber(1);
                      }}
                    >
                      Pants
                    </button>
                  </div>
                </div>
              </button>

              <button className="navbar-button-item-left">
                <span>About</span>
              </button>
            </div>

            <div className="navbar-search">
              <input type="text" placeholder="Search here.." />

              <div className="navbar-search-icon">
                <button>
                  <BsSearch />
                </button>
              </div>
            </div>

            <div id="large-display" className="navbar-bs-item-right">
              <button className="icon">
                <BsCartCheckFill size={18} />
              </button>

              <button id="wishlist" className="icon">
                <BsFillHeartFill size={18} />
              </button>

              <button id="list-icon" className="icon">
                <BsList size={18} />
              </button>

              <div className="navbar-title-line"></div>

              {/* <button className="icon">
                <BsFillPersonFill size={18} />
              </button> */}

              <button className="text">Sign In</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarBs;
