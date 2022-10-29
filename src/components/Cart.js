import React from "react";
import Navbarleft from "./shared/Navbarleft";
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
        <Navbarleft />
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
              <div className="checkoutBtn">
                <Link to="/checkout">
                  <button type="button" class="btn btn-danger">Checkout</button>
                </Link>
               
              </div>
              </>
              )}
            
              
           
            

            {/* <table className="timetable_sub">
					<thead>
						<tr>
							<th>SL No.</th>	
							<th>Product</th>
							<th>Quality</th>
							<th>Product Name</th>
						
							<th>Price</th>
							<th>Remove</th>
						</tr>
					</thead>
					<tbody><tr className="rem1">
						<td className="invert">1</td>
						<td className="invert-image"><Link to="single.html"><img src="../Assets/images/1.png" alt=" " className="img-responsive"/></Link></td>
						<td className="invert">
							 <div className="quantity"> 
								<div className="quantity-select">                           
									<div className="entry value-minus">&nbsp;</div>
									<div className="entry value"><span>1</span></div>
									<div className="entry value-plus active">&nbsp;</div>
								</div>
							</div>
						</td>
						<td className="invert">Fortune Sunflower Oil</td>
						
						<td className="invert">$290.00</td>
						<td className="invert">
							<div className="rem">
								<div className="close1"> </div>
							</div>

						</td>
					</tr>
				

				</tbody></table> */}

            <div className="checkout-left">
              {/* <div className="col-md-4 checkout-left-basket">
					<h4>Continue to basket</h4>
					<ul>
						<li>Product1 <i>-</i> <span>$15.00 </span></li>
						<li>Product2 <i>-</i> <span>$25.00 </span></li>
						<li>Product3 <i>-</i> <span>$29.00 </span></li>
						<li>Total Service Charges <i>-</i> <span>$15.00</span></li>
						<li>Total <i>-</i> <span>$84.00</span></li>
					</ul>
				</div> */}
              {/* <div className="col-md-8 address_form_agile">
					  <h4>Add a new Details</h4>
				<form action="payment.html" method="post" className="creditly-card-form agileinfo_form">
									<section className="creditly-wrapper wthree, w3_agileits_wrapper">
										<div className="information-wrapper">
											<div className="first-row form-group">
												<div className="controls">
													<label className="control-label">Full name: </label>
													<input className="billing-address-name form-control" type="text" name="name" placeholder="Full name"/>
												</div>
												<div className="w3_agileits_card_number_grids">
													<div className="w3_agileits_card_number_grid_left">
														<div className="controls">
															<label className="control-label">Mobile number:</label>
														    <input className="form-control" type="text" placeholder="Mobile number"/>
														</div>
													</div>
													<div className="w3_agileits_card_number_grid_right">
														<div className="controls">
															<label className="control-label">Landmark: </label>
														 <input className="form-control" type="text" placeholder="Landmark"/>
														</div>
													</div>
													<div className="clear"> </div>
												</div>
												<div className="controls">
													<label className="control-label">Town/City: </label>
												 <input className="form-control" type="text" placeholder="Town/City"/>
												</div>
													<div className="controls">
															<label className="control-label">Address type: </label>
												     <select className="form-control option-w3ls">
																							<option>Office</option>
																							<option>Home</option>
																							<option>Commercial</option>
							
																					</select>
													</div>
											</div>
											<button className="submit check_out">Delivery to this Address</button>
										</div>
									</section>
								</form>
									<div className="checkout-right-basket">
				        	<Link to="payment.html">Make a Payment <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></Link>
			      	</div>
					</div>
			 */}
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
