import React from "react";
import "./Footer.css";
import { BsShop, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-feedback-container">
          <h4>Give us feedback!</h4>

          <form className="form-feedback" action="">
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="emailInput" />
            </div>

            <div className="mb-3">
              <label htmlFor="messageInput" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="messageInput"
                cols="60"
                rows="5"
              ></textarea>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>

        <div className="footer-social-container">
          <h4>Follow us!</h4>

          <div className="footer-social">
            <div className="footer-social-icon">
              <BsFacebook size={25} />
            </div>

            <div className="footer-social-icon">
              <BsInstagram size={25} />
            </div>

            <div className="footer-social-icon">
              <BsTwitter size={25} />
            </div>
          </div>
        </div>

        <div className="footer-copyright-container">
          {/* <BsShop size={100} /> */}
          <img src={require("../../img/img-logo-2.png")} alt="" className="footer-logo" />
          <h4>Buana Store</h4>

          <div className="footer-copyright">
            <p>© 2022, Buana Store</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
