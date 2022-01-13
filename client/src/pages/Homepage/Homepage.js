import React, { useState, useEffect } from "react";
import HomepageContent from "../../components/HomepageContent/HomepageContent";
import NavbarBs from "../../components/NavbarBs/NavbarBs";
import "./Homepage.css";
import Axios from "axios";
import Footer from "../../components/Footer/Footer";

const Homepage = (props) => {
  const [productName, setProductName] = useState("All Products");
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [getProducts, setGetProducts] = useState({});
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [filterItem, setFilterItem] = useState("All");

  const storeObj = {
    page: "homepage",
    productName,
    setProductName,
    sidebarStatus,
    setSidebarStatus,
    getProducts,
    currentPageNumber,
    setCurrentPageNumber,
    filterItem,
    setFilterItem,
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

      <div className="homepage-footer">
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
