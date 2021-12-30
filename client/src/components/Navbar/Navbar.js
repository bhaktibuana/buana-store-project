import React from "react";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="breadcumb-container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Store</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  All Products
                </li>
              </ol>
            </nav>

            <p className="page-title">All Product</p>
          </div>

          <div className="navbar-items-container">
            <div className="navbar-items">
              <div className="search">
                <div className="search-icon">
                  <button className="btn-search">
                    <BsSearch />
                  </button>
                </div>

                <input type="text" className="input-search" placeholder="Search here.." />
              </div>

              <div className="item-line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
