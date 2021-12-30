import React, { useState } from "react";
import "./Sidebar.css";
import {
  BsShop,
  BsFillHouseFill,
  BsFillBagCheckFill,
  BsFillInboxesFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";

const Sidebar = ({ page }) => {
  const [dropdown, setDropdown] = useState(false);

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };

  const itemStyle = {
    background: "#fff",
    cursor: "default",
    "box-shadow": "rgb(0 0 0 / 4%) 0px 7px 11px",
  };

  const itemIconStyle = {
    background: "#0275d8",
    color: "#fff",
  };

  const itemTextStyle = {
    color: "#1f2733",
  };

  const noAdditionStyle = {};

  const dropdownItemStyle = {
    height: !dropdown ? "0" : "34px",
    "margin-bottom": !dropdown ? "0" : "12px",
    padding: !dropdown ? "0" : "6px 8px",
    transition: "all 0.2s linear 0s",
  };

  const dropdownItemTextStyle = {
    "font-size": !dropdown ? "0" : "0.875rem",
    transition: "all 0.2s linear 0s",
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-container">
          <div className="sidebar-title">
            <a href="/">
              <div className="sidebar-logo">
                <BsShop size={28} />
              </div>
              <p>BUANA STORE</p>
            </a>

            <div className="sidebar-title-line"></div>
          </div>

          <div className="sidebar-items-container">
            <button
              className="sidebar-item"
              style={page === "home" ? itemStyle : noAdditionStyle}
            >
              <div className="sidebar-item-content">
                <div
                  className="sidebar-item-icon"
                  style={page === "home" ? itemIconStyle : noAdditionStyle}
                >
                  <BsFillHouseFill size={16} />
                </div>

                <p
                  className="sidebar-item-text"
                  style={page === "home" ? itemTextStyle : noAdditionStyle}
                >
                  Home
                </p>
              </div>
            </button>

            <button
              className="sidebar-item"
              style={page === "store" ? itemStyle : noAdditionStyle}
            >
              <div className="sidebar-item-content">
                <div
                  className="sidebar-item-icon"
                  style={page === "store" ? itemIconStyle : noAdditionStyle}
                >
                  <BsFillBagCheckFill size={16} />
                </div>

                <p
                  className="sidebar-item-text"
                  style={page === "store" ? itemTextStyle : noAdditionStyle}
                >
                  Store
                </p>
              </div>
            </button>

            <button
              className="sidebar-item"
              style={dropdown ? {...itemStyle, cursor: "pointer"} : noAdditionStyle}
              onClick={dropdownHandler}
            >
              <div className="sidebar-item-content">
                <div
                  className="sidebar-item-icon"
                  style={dropdown ? itemIconStyle : noAdditionStyle}
                >
                  <BsFillInboxesFill size={16} />
                </div>

                <p
                  className="sidebar-item-text"
                  style={dropdown ? itemTextStyle : noAdditionStyle}
                >
                  Products
                </p>
              </div>
            </button>

            <div className="dopdown-container">
              <button className="dropdown-item" style={dropdownItemStyle}>
                <p className="dropdown-item-text" style={dropdownItemTextStyle}>
                  Shirt
                </p>
              </button>

              <button className="dropdown-item" style={dropdownItemStyle}>
                <p className="dropdown-item-text" style={dropdownItemTextStyle}>
                  Hoodie
                </p>
              </button>

              <button className="dropdown-item" style={dropdownItemStyle}>
                <p className="dropdown-item-text" style={dropdownItemTextStyle}>
                  Pants
                </p>
              </button>
            </div>

            <button
              className="sidebar-item"
              style={page === "about" ? itemStyle : noAdditionStyle}
            >
              <div className="sidebar-item-content">
                <div
                  className="sidebar-item-icon"
                  style={page === "about" ? itemIconStyle : noAdditionStyle}
                >
                  <BsFillInfoCircleFill size={16} />
                </div>

                <p
                  className="sidebar-item-text"
                  style={page === "about" ? itemTextStyle : noAdditionStyle}
                >
                  About
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
