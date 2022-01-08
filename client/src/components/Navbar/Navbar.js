import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {
  BsSearch,
  BsCartCheckFill,
  BsFillHeartFill,
  BsList,
  BsFillPersonFill,
} from "react-icons/bs";

const Navbar = (props) => {
  const [navStyle, setNavStyle] = useState("navbar-container");

  const listenScrollEvent = () => {
    if (window.scrollY > 1) {
      return setNavStyle("navbar-container-fixed");
    } else {
      return setNavStyle("navbar-container");
    }
  };

  const sidebarStatusHandler = () => {
    props.setSidebarStatus(!props.storeObj.sidebarStatus);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <div className={navStyle}>
        <div className="navbar-content">
          <div className="page-title-container">
            <p className="page-title">{props.storeObj.page === "about" ? "About" : props.storeObj.product}</p>
          </div>

          <div className="navbar-items-container">
            <div className="navbar-items">
              <div className="search">
                <div className="search-icon">
                  <button className="btn-search">
                    <BsSearch />
                  </button>
                </div>

                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here.."
                />
              </div>

              <button className="item-icon">
                <BsCartCheckFill size={18} />
              </button>

              <button id="wishlist" className="item-icon">
                <BsFillHeartFill size={18} />
              </button>

              <button
                id="list-icon"
                className="item-icon"
                onClick={sidebarStatusHandler}
              >
                <BsList size={18} />
              </button>

              <div className="item-line"></div>

              <button className="item-icon">
                <BsFillPersonFill size={18} />
              </button>

              {/* <button className="item-text">Sign In</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
