import React from "react";
import "./SignInContent.css";

const SignInContent = () => {
  return (
    <>
      <div className="signin-content-container">
        <div className="signin-background-container">
          <img src={require("../../img/img-sign-bg.jpg")} alt="sign-bg" />
        </div>

        <div className="signin-card-container">
          <div className="signin-card">
            <p>Sign in and enjoy your shopping</p>

            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="insert your email"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="insert your password"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button type="submit" class="btn container-fluid btn-primary">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInContent;
