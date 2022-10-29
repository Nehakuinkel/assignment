import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Navbarleft from "../shared/Navbarleft";
import { useForm } from "react-hook-form";

function ForgotPassword() {
  const { register, handleSubmit, resetField } = useForm({
    mode: "onTouched",
  });

  const handleRegistration = (data) => {
    resetField("Email");
    console.log(data);
    axios({
      method: "post",
      url: "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/forgot-password",
      data: {
        email: data.Email,
      },
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Forgot Password</li>
          </ul>
        </div>
      </div>

      <div className="banner">
        <Navbarleft />
        <div className="w3l_banner_nav_right">
          <div className="w3_login">
            <h3>Sign Up</h3>
            <div className="w3_login_module">
              <div className="module form-module">
                <div>
                  <h2>Forgot Password</h2>
                  <form
                    onSubmit={handleSubmit(handleRegistration)}
                    action="/resetPassword"
                    method="post"
                  >
                    <input
                      type="email"
                      placeholder="Email Address"
                      {...register("Email")}
                    />

                    <input type="submit" value="Submit" />
                  </form>
                </div>
                <div className="cta">
                  <Link to="forgetPassword">Forgot your password?</Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- //login --> */}
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default ForgotPassword;
