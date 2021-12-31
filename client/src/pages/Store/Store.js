import React, { useState } from "react";
import "./Store.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import StoreContent from "../../components/StoreContent/StoreContent";

const Store = () => {
  const [productName, setProductName] = useState('All Products');

  const storeObj = {
    page: "store",
    product: productName,
    setProduct: function (productChange) {
      return (this.product = productChange);
    },
  };

  return (
    <>
      <Sidebar storeObj={storeObj} setProductName={setProductName} />
      <div className="page-container">
        <div className="page-content">
          <div className="page-content-container">
            <StoreContent {...storeObj} />
            <Navbar storeObj={storeObj} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
