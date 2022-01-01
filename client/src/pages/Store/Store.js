import React, { useState } from "react";
import "./Store.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import StoreContent from "../../components/StoreContent/StoreContent";

const Store = () => {
  const [productName, setProductName] = useState("All Products");
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const storeObj = {
    page: "store",
    product: productName,
    sidebarStatus,
  };

  return (
    <>
      <Sidebar storeObj={storeObj} setProductName={setProductName} setSidebarStatus={setSidebarStatus} />
      <div className="page-container">
        <div className="page-content">
          <div className="page-content-container">
            <StoreContent {...storeObj} />
            <Navbar storeObj={storeObj} setSidebarStatus={setSidebarStatus} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
