import React, { useState, useEffect } from "react";
import "./Store.css";
import Axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import StoreContent from "../../components/StoreContent/StoreContent";

const Store = (props) => {
  const [productName, setProductName] = useState("All Products");
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [getProducts, setGetProducts] = useState({});

  const storeObj = {
    page: "store",
    product: productName,
    sidebarStatus,
    getProducts,
  };

  useEffect(() => {
    Axios.get(props.apiURL.apiGetAllProductsItem).then((response) => {
      setGetProducts(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar
        storeObj={storeObj}
        setProductName={setProductName}
        setSidebarStatus={setSidebarStatus}
      />
      <div className="page-container">
        <div className="page-content">
          <div className="page-content-container">
            <StoreContent storeObj={storeObj} />
            <Navbar storeObj={storeObj} setSidebarStatus={setSidebarStatus} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
