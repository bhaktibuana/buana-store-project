import React, { useState, useEffect } from "react";
import HomepageContent from "../../components/HomepageContent/HomepageContent";
import NavbarBs from "../../components/NavbarBs/NavbarBs";
import "./Homepage.css";
import Axios from "axios";

const Homepage = (props) => {
  const [productName, setProductName] = useState("All Products");
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [getProducts, setGetProducts] = useState({});
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const storeObj = {
    page: "homepage",
    productName,
    setProductName,
    sidebarStatus,
    setSidebarStatus,
    getProducts,
    currentPageNumber,
    setCurrentPageNumber,
  };

  useEffect(() => {
    Axios.get(props.apiURL.apiGetAllProductsItem).then((response) => {
      setGetProducts(response.data);
    });
  }, []);

  return (
    <>
      <div className="homepage-container">
        <NavbarBs storeObj={storeObj} />
        <HomepageContent storeObj={storeObj} />
      </div>
    </>
  );
};

export default Homepage;
