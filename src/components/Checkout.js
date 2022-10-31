import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerOptions } from "./shared/formValidate";
import "./checkout.css";
import axios from "axios";



function Checkout({ cart, setCart, increment, decrement, removeItem, total }) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const handleRegistration = (data) => {
    console.log(data);
    axios({
      method: "post",
      url: "https://uat.ordering-farmshop.ekbana.net/api/v4/delivery-address",
      data: {
        title: data.place,
        latitude: data.latitude,
        longitude: data.longitude,
        customer: data.name,
        contact_no: data.contactNumber,
        isDefault: true
      },
      	headers: {
      		"Api-key": process.env.REACT_APP_API_KEY,
        },
        Authorization:{
          access_token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4YWIyNmM4NjRlZTZkNTEwNDcyODZjMjgyMzA5ZmVlMTY5ZTFiZDA2ZTQxODY1OTA3M2RlNmI0OWMyNTM0MGFkZTU4NDc0ZmI0YTk0NGIyIn0.eyJhdWQiOiIyIiwianRpIjoiNjhhYjI2Yzg2NGVlNmQ1MTA0NzI4NmMyODIzMDlmZWUxNjllMWJkMDZlNDE4NjU5MDczZGU2YjQ5YzI1MzQwYWRlNTg0NzRmYjRhOTQ0YjIiLCJpYXQiOjE2NjY5Nzg1MDQsIm5iZiI6MTY2Njk3ODUwNCwiZXhwIjoxNjc0OTI3MzA0LCJzdWIiOiI4MjMiLCJzY29wZXMiOltdfQ.G0U9C4eoYSdXGPnwecIelNcfi3gyiv1HdJFF7MIuOaJqIRFpSX85Xj0Em9wKe2RqaUDsCziaomp2tH4NCB_FjF09w-vZf81xLNgeDpa3dVqjKsomEYk2m-kgl9L04Aaotyse6LM8cV4KFssnlbb4w6PvP2sS-e45ZlAe8uK__MRfwLdDtHQDWDLGtvjez5r3opZP-hrnLy6Xuj35SjNL6tjHOWQ1JkyTjs2Y9S1NLLnOHqyCecfcLWwSRDKHmirS4elJfKS2V0o79M9B4T2heAR2Lx2hRxU5odvwWDd0Vlq0Br14YuSfHa6EQ8aInnnusY_brexe88tYRfwc0vy3zImZGjRzUOXt49zk4eRH1RdV9-spewnSxzz-tNIMbsI5dZRyNo4ROkznHKkS0P7Nc6vzZbWAGRAsb06wdzy4_p0XZBLkaKdeSyL3-4NdLxmjPu3t0te_SmHGG3dVedXtRpGbBsOyzXwQzKe8BW0olkcJgTQSkq43UIAL-z1CzCHZpXJiYuvQ7HJDuemB4fAU20B_e7FjY8zUw4nFlJTjDUIn6TNmw3Fs57-AWmjvDyz1z-XXhaOXd1tFwHz8gvnFiHTElbyrGNixRwKirkw4ei06SVTXSHVOcePl2TbkooDtO8fK8UgsQITJhRzSMJKodXw_8C2LmyXqBmaij7VisUE"
        },
    }).then((response) => {
      console.log(response);
    });
    resetField("place");
    resetField("latitude");
    resetField("longitude");
    resetField("name");
    resetField("contactNumber");
  }



  return (
    <>
      {/* <Header/> */}
      {/* <!-- products-breadcrumb --> */}
      <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Checkout</li>
          </ul>
        </div>
      </div>
      {/* <!-- //products-breadcrumb -->
<!-- banner --> */}
      <div className="banner">
        <div className="w3l_banner_nav_right">
          {/* <!-- about --> */}
          <div className="privacy about">
            <h3>
              Chec<span>kout</span>
            </h3>

            <div className="checkout-right">
              <h4>
                Your shopping cart contains: <span>{cart.length} Products</span>
              </h4>
            </div>
            {cart.map((item, index) => {
              return (
                <>
                  <div className="cartItems mb-3">
                    <h4>{index + 1}</h4>
                    <span className="cartName">{item.title}</span>
                    <img src={item.images[0].imageName} alt=" " className="cart-img" />
                    <div className="qty">
                      <button
                        onClick={() => decrement(item.id)}
                        className="cartbtn"
                        type="submit"
                      >
                        -
                      </button>

                      <span className="quantity">{item.orderedQuantity}</span>
                      <button
                        onClick={() => increment(item.id)}
                        className="cartbtn"
                        type="submit"
                      >
                        +
                      </button>
                    </div>
                    <p className="price">
                      {item.unitPrice[0].newPrice * item.orderedQuantity}
                    </p>
                    <button onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </div>
                  <hr />
                </>
              );
            })}
            {cart.length>0 &&(
              <>
              <div>
                  <p className="total">
                <strong>Total : {total}</strong>
              </p>
              </div>
              </>
              )}
            <div className="checkout-left">
              <div className="col-md-4 checkout-left-basket">
                <h4>Basket List</h4>
                <ul>
                {cart.map((item) => {
                  return(
                    <>
                    <li>
                    {item.title} <i>-</i> <span>{item.unitPrice[0].newPrice} </span>
                  </li>
                    </>
                  )
                })}
                <li>
                    Total <i>-</i> <span>{total}</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-8 address_form_agile">
                <h4>Add a new Details</h4>
                <form
                      onSubmit={handleSubmit(handleRegistration)}
                      action="#"
                      method="post"
                >
                  <section className="creditly-wrapper wthree, w3_agileits_wrapper">
                    <div className="information-wrapper">
                      <div className="first-row form-group">
                        <div className="controls">
                          <label className="control-label">Full name: </label>
                          <input
                             type="text"
                            {...register("name", registerOptions.Name)}
                            className="billing-address-name form-control"
                            placeholder="Full name"
                          />
                          {errors?.name && (
                        <span className="error-text">
                          {errors.name.message}
                        </span>
                      )}
                        </div>
                        <div className="w3_agileits_card_number_grids">
                          <div className="w3_agileits_card_number_grid_left">
                            <div className="controls">
                              <label className="control-label">
                                Mobile number:
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                {...register("mobileNumber")}
                                placeholder="Mobile number"
                              />
                              {errors?.mobileNumber && (
                        <span className="error-text">
                          {errors.Telephone.message}
                        </span>
                      )}
                            </div>
                          </div>
                          <div className="w3_agileits_card_number_grid_right">
                            <div className="controls">
                              <label className="control-label">
                                latitude:{" "}
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                {...register("latitude")}
                                placeholder="latitude"
                              />
                              <label className="control-label">
                                Longitude:{" "}
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                {...register("longitude")}
                                placeholder="longitude"
                              />
                            </div>
                          </div>
                          <div className="clear"> </div>
                        </div>
                        <div className="controls">
                          <label className="control-label">
                            Address type:{" "}
                          </label>
                          <select className="form-control place" {...register("place")}>
                            <option>Office</option>
                            <option>Home</option>
                            <option>Commercial</option>
                          </select>
                          {/* {errors?.Name && (
                        <span className="error-text">
                          {errors.Name.message}
                        </span>
                      )} */}
                        </div>
                      </div>
                      <button className="submit check_out">
                        Delivery to this Address
                      </button>
                    </div>
                  </section>
                </form>
                <div className="checkout-right-basket">
                  <Link to="payment.z">
                    Make a Payment{" "}
                    <span
                      className="glyphicon glyphicon-chevron-right"
                      aria-hidden="true"
                    ></span>
                  </Link>
                </div>
              </div>

              <div className="clearfix"> </div>
            </div>
          </div>
          {/* <!-- //about --> */}
        </div>
        <div className="clearfix"></div>
      </div>
      {/* <!-- //banner --> */}
      {/* <Footer/> */}
    </>
  );
}

export default Checkout;
