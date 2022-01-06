import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import {
  BsShop,
  BsFillHouseFill,
  BsFillBagCheckFill,
  BsFillInboxesFill,
  BsFillInfoCircleFill,
  BsXLg,
} from "react-icons/bs";

const Sidebar = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  const sidebarStyle = {
    background: "transparent",
    left: "0",
    "box-shadow": "rgb(0 0 0 / 4%) 0px 7px 11px",
  };

  const sidebarContainerStyle = {
    background: "#fff",
  };

  const sidebarStatusHandler = () => {
    props.setSidebarStatus(!props.storeObj.sidebarStatus);
  };

  const screenHandler = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", screenHandler);

    if (screenWidth >= 1200) {
      props.setSidebarStatus(false);
    }
  });

  return (
    <>
      {props.storeObj.sidebarStatus ? (
        <div className="sidebar-modal" onClick={sidebarStatusHandler}></div>
      ) : (
        ""
      )}
      <div
        className="sidebar"
        style={props.storeObj.sidebarStatus ? sidebarStyle : noAdditionStyle}
      >
        <button className="modal-close" onClick={sidebarStatusHandler}>
          <BsXLg />
        </button>
        <div
          className="sidebar-container"
          style={
            props.storeObj.sidebarStatus
              ? sidebarContainerStyle
              : noAdditionStyle
          }
        >
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
              style={
                props.storeObj.page === "home" ? itemStyle : noAdditionStyle
              }
            >
              <div className="sidebar-item-content">
                <div
                  className="sidebar-item-icon"
                  style={
                    props.storeObj.page === "home"
                      ? itemIconStyle
                      : noAdditionStyle
                  }
                >
                  <BsFillHouseFill size={16} />
                </div>

                <p
                  className="sidebar-item-text"
                  style={
                    props.storeObj.page === "home"
                      ? itemTextStyle
                      : noAdditionStyle
                  }
                >
                  Home
                </p>
              </div>
            </button>

            <button
              className="sidebar-item"
              style={
                props.storeObj.page === "store" ? itemStyle : noAdditionStyle
              }
            >
              <div className="sidebar-item-content">
                <div
                  className="sidebar-item-icon"
                  style={
                    props.storeObj.page === "store"
                      ? itemIconStyle
                      : noAdditionStyle
                  }
                >
                  <BsFillBagCheckFill size={16} />
                </div>

                <p
                  className="sidebar-item-text"
                  style={
                    props.storeObj.page === "store"
                      ? itemTextStyle
                      : noAdditionStyle
                  }
                >
                  Store
                </p>
              </div>
            </button>

            <button
              className="sidebar-item"
              style={
                dropdown ? { ...itemStyle, cursor: "pointer" } : noAdditionStyle
              }
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
              <button
                className="dropdown-item"
                style={dropdownItemStyle}
                onClick={(e) => {
                  props.setProductName("All Products");
                  dropdownHandler();
                  props.setFilterItem("All");
                  props.setCurrentPageNumber(1);
                }}
              >
                <p className="dropdown-item-text" style={dropdownItemTextStyle}>
                  All Products
                </p>
              </button>

              <button
                className="dropdown-item"
                style={dropdownItemStyle}
                onClick={(e) => {
                  props.setProductName("Shirt");
                  dropdownHandler();
                  props.setFilterItem("All");
                  props.setCurrentPageNumber(1);
                }}
              >
                <p className="dropdown-item-text" style={dropdownItemTextStyle}>
                  Shirt
                </p>
              </button>

              <button
                className="dropdown-item"
                style={dropdownItemStyle}
                onClick={(e) => {
                  props.setProductName("Hoodie");
                  dropdownHandler();
                  props.setFilterItem("All");
                  props.setCurrentPageNumber(1);
                }}
              >
                <p className="dropdown-item-text" style={dropdownItemTextStyle}>
                  Hoodie
                </p>
              </button>

              <button
                className="dropdown-item"
                style={dropdownItemStyle}
                onClick={(e) => {
                  props.setProductName("Pants");
                  dropdownHandler();
                  props.setFilterItem("All");
                  props.setCurrentPageNumber(1);
                }}
              >
                <p className="dropdown-item-text" style={dropdownItemTextStyle}>
                  Pants
                </p>
              </button>
            </div>

            <button
              className="sidebar-item"
              style={
                props.storeObj.page === "about" ? itemStyle : noAdditionStyle
              }
            >
              <div className="sidebar-item-content">
                <div
                  className="sidebar-item-icon"
                  style={
                    props.storeObj.page === "about"
                      ? itemIconStyle
                      : noAdditionStyle
                  }
                >
                  <BsFillInfoCircleFill size={16} />
                </div>

                <p
                  className="sidebar-item-text"
                  style={
                    props.storeObj.page === "about"
                      ? itemTextStyle
                      : noAdditionStyle
                  }
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
