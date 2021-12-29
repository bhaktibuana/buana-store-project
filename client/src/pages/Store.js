import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Store = () => {
  const sidebarObj = { page: "store" };

  return (
    <>
      <Sidebar {...sidebarObj} />
    </>
  );
};

export default Store;
