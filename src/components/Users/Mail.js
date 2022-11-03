import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerOptions } from "../shared/formValidate";
import axios from "axios";
import "../../form.css";
import toast from "react-hot-toast";

function Mail() {
  const [status, setStatus] = useState();
  const ContactUsURL = "https://uat.ordering-farmshop.ekbana.net/api/v4/contact-us";
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const haldleRegistration = (data) => {
    // console.log(data);
    const postContactUs = async () => {
      try {
        const response = await axios({
          method: "post",
          url: ContactUsURL,
          data: {
            message: data.message,
            subject: data.subject,
            email: data.email,
            name: data.fullName,
            contact: data.mobileNo,
          },
          headers: {
            "Content-Type": "application/json",
            "Warehouse-Id": 1,
            "Api-Key": process.env.REACT_APP_API_KEY,
          },
        });
        console.log(response);
        console.log(response.data.data.success.message);
          setStatus(response.status)
          if (status === 200) {
            toast.success(`Success: ${response.data.data.success.message}`, {
              style: {
                border: '1px solid #713200',
                padding: '16px',
                color: 'green',
              },
              iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
              },
            }); 
          }
      } catch (err) {
        console.log(err);
        // console.log(err.response.data.errors[0].message)
        toast.error(`Error: ${err.response.data.errors[0].message}`, {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: 'Red',
          },
          iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
        });
      }
      
    };
    postContactUs();
    resetField("fullName");
    resetField("email");
    resetField("mobileNo");
    resetField("subject");
    resetField("message");
  };
  return (
    <>
      <div class="products-breadcrumb">
        <div class="container">
          <ul>
            <li>
              <i class="fa fa-home" aria-hidden="true"></i>
              {/* <a href="index.html">Home</a> */}
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Mail Us</li>
          </ul>
        </div>
      </div>
      <div class="banner">
        <div class="w3l_banner_nav_right">
          {/* <!-- mail --> */}
          <div class="mail">
            <h3>Mail Us</h3>
            <div class="agileinfo_mail_grids">
              <div class="col-md-4 agileinfo_mail_grid_left">
                <ul>
                  <li>
                    <i class="fa fa-home" aria-hidden="true"></i>
                  </li>
                  <li>
                    address<span>Kathmandu, Nepal.</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </li>
                  <li>
                    email
                    <span>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                  </li>
                  <li>
                    call to us<span>(+977) 9840000000</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-8 agileinfo_mail_grid_right">
                <form
                  action="#"
                  method="post"
                  onSubmit={handleSubmit(haldleRegistration)}
                >
                  <div class="col-md-6 wthree_contact_left_grid">
                    <input
                      {...register("fullName", registerOptions.Name)}
                      placeholder="Full Name"
                      type="text"
                    />
                    {errors?.fullName && (
                      <span className="error-text">
                        {errors.fullName.message}
                      </span>
                    )}
                    {/* {errors.fullName && <span>*Full Name is required.</span>} */}
                    <input
                      className="email"
                      {...register("email", registerOptions.Email)}
                      placeholder="Email"
                      type="email"
                      defaultValue=""
                    />
                    {errors?.email && (
                      <span className="error-text">{errors.email.message}</span>
                    )}
                  </div>
                  <div class="col-md-6 wthree_contact_left_grid">
                    <input
                      {...register("mobileNo", registerOptions.Telephone)}
                      placeholder="Mobile Number"
                      defaultValue=""
                      type="text"
                    />
                    {errors?.mobileNo && (
                      <span className="error-text">
                        {errors.mobileNo.message}
                      </span>
                    )}
                    <input
                      className="subject"
                      {...register("subject", registerOptions.Subject)}
                      type="text"
                      placeholder="Subject"
                    />

                    {errors?.subject && (
                      <span className="error-text">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                  <div class="clearfix"> </div>
                  <textarea
                    {...register("message", {})}
                    placeholder="Message"
                    defaultValue=""
                  />

                  <input type="submit" value="Submit" />
                  <input type="reset" value="Clear" />
                </form>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
          {/* <!-- //mail --> */}
        </div>
        <div class="clearfix"></div>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14133.53388427819!2d85.44787165!3d27.6745405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1666763599308!5m2!1sen!2snp" title="JagatiPlace"></iframe>
        </div>
      </div>
    </>
  );
}

export default Mail;
