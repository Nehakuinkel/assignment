import React from "react";
import { Link } from "react-router-dom";
import "../cart.css";

function Cart({ cart, setCart, increment, decrement, removeItem, total }) {
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
            <li>Cart Items</li>
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
              Items in Your <span>Cart</span>
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
                        className="cartbtn btn btn-danger"
                        type="submit"
                      >
                        -
                      </button>

                      <span className="quantity">{item.orderedQuantity}</span>
                      <button
                        onClick={() => increment(item.id)}
                        className="cartbtn btn btn-success"
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
              <div className="checkoutBtn">
                <Link to="/checkout">
                  <button type="button" class="btn btn-danger">Proceed to Checkout---</button>
                </Link>
               
              </div>
              </>
              )}
          
        
            <div className="checkout-left">
            
            
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

export default Cart;
