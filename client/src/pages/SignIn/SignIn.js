import React from "react";
import SignNavbar from "../../components/SignNavbar/SignNavbar";
import "./SignIn.css";

const SignIn = () => {
  return (
    <>
      <div className="signin-container">
        <SignNavbar />
      </div>

      <div className="signin-footer">
        <p>© 2022, Buana Store</p>
      </div>
    </>
  );
};

export default SignIn;
