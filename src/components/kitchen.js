import React from 'react'
// import Footer from './shared/Footer'
// import Header from './shared/Header'
import Navbarleft from './shared/Navbarleft'
import { Link } from 'react-router-dom'

function kitchen() {
  return (
    <>
    {/* <Header/> */}
    {/* <!-- products-breadcrumb --> */}
	<div className="products-breadcrumb">
		<div className="container">
			<ul>
				<li><i className="fa fa-home" aria-hidden="true"></i><Link to="/">Home</Link><span>|</span></li>
				<li>Kitchen</li>
			</ul>
		</div>
	</div>
{/* <!-- //products-breadcrumb -->
<!-- banner --> */}
	<div className="banner">
		<Navbarleft/>
		<div className="w3l_banner_nav_right">
			<div className="w3l_banner_nav_right_banner6">
				<h3>Best Deals For New Products<span className="blink_me"></span></h3>
			</div>
			<div className="w3l_banner_nav_right_banner3_btm">
				<div className="col-md-4 w3l_banner_nav_right_banner3_btml">
					<div className="view view-tenth">
						<img src="../Assets/images/13.jpg" alt=" " className="img-responsive" />
						<div className="mask">
							<h4>Grocery Store</h4>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
						</div>
					</div>
					<h4>Utensils</h4>
					<ol>
						<li>sunt in culpa qui officia</li>
						<li>commodo consequat</li>
						<li>sed do eiusmod tempor incididunt</li>
					</ol>
				</div>
				<div className="col-md-4 w3l_banner_nav_right_banner3_btml">
					<div className="view view-tenth">
						<img src="../Assets/images/20.jpg" alt=" " className="img-responsive"/>
						<div className="mask">
							<h4>Grocery Store</h4>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
						</div>
					</div>
					<h4>Vegetables</h4>
					<ol>
						<li>dolorem eum fugiat voluptas</li>
						<li>ut aliquid ex ea commodi</li>
						<li>magnam aliquam quaerat</li>
					</ol>
				</div>
				<div className="col-md-4 w3l_banner_nav_right_banner3_btml">
					<div className="view view-tenth">
						<img src="../Assets/images/15.jpg" alt=" " className="img-responsive" />
						<div className="mask">
							<h4>Grocery Store</h4>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
						</div>
					</div>
					<h4>Cookies</h4>
					<ol>
						<li>dolorem eum fugiat voluptas</li>
						<li>ut aliquid ex ea commodi</li>
						<li>magnam aliquam quaerat</li>
					</ol>
				</div>
				<div className="clearfix"> </div>
			</div>
			<div className="w3ls_w3l_banner_nav_right_grid">
				<div className="w3ls_w3l_banner_nav_right_grid_head">
					<h6>Popular Categories</h6>
				</div>
				<div className="w3ls_w3l_banner_nav_right_grid_head_grids">
					<div className="col-md-4 w3ls_w3l_banner_nav_right_grid_head_grid">
						<img src="../Assets/images/22.jpg" alt=" " className="img-responsive" />
						<h4>Bread & Bakery</h4>
						<ul>
							<li><Link to="bread.html">Raising rolls</Link></li>
							<li><Link to="bread.html">Butter Croissants</Link></li>
							<li><Link to="bread.html">wheat pita</Link></li>
							<li><Link to="bread.html">Hot dog roll</Link></li>
						</ul>
					</div>
					<div className="col-md-4 w3ls_w3l_banner_nav_right_grid_head_grid">
						<img src="../Assets/images/23.jpg" alt=" " className="img-responsive" />
						<h4>Beverages</h4>
						<ul>
							<li><Link to="drinks.html">Juices</Link></li>
							<li><Link to="drinks.html">Soft Drinks</Link></li>
							<li><Link to="drinks.html">Energy Drinks</Link></li>
						</ul>
					</div>
					<div className="col-md-4 w3ls_w3l_banner_nav_right_grid_head_grid">
						<img src="../Assets/images/24.jpg" alt=" " className="img-responsive" />
						<h4>Frozen Foods</h4>
						<ul>
							<li><Link to="frozen.html">Frozen Snacks</Link></li>
							<li><Link to="frozen.html">Frozen Nonveg</Link></li>
							<li><Link to="frozen.html">Frozen Sweet Corn</Link></li>
							<li><Link to="frozen.html">Frozen Mixed Vegetable</Link></li>
						</ul>
					</div>
					<div className="clearfix"> </div>
				</div>
			</div>
		</div>
		<div className="clearfix"></div>
	</div>
{/* <!-- //banner -->
<!-- top-brands --> */}
	<div className="top-brands">
		<div className="container">
			<h3>Popular Products</h3>
			<div className="agile_top_brands_grids">
				<div className="col-md-3 top_brand_left">
					<div className="hover14 column">
						<div className="agile_top_brand_left_grid">
							<div className="tag"><img src="../Assets/images/tag.png" alt=" " className="img-responsive" /></div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block" >
										<div className="snipcart-thumb">
											<Link to="single"><img title=" " alt=" " src="../Assets/images/1.png" /></Link>		
											<p>fortune sunflower oil</p>
											<h4>$7.99 <span>$10.00</span></h4>
										</div>
										<div className="snipcart-details top_brand_home_details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="fortune sunflower oil" />
													<input type="hidden" name="amount" value="7.99" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-3 top_brand_left">
					<div className="hover14 column">
						<div className="agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block" >
										<div className="snipcart-thumb">
											<Link to="single"><img title=" " alt=" " src="../Assets/images/3.png" /></Link>		
											<p>basmati rise (5 Kg)</p>
											<h4>$11.99 <span>$15.00</span></h4>
										</div>
										<div className="snipcart-details top_brand_home_details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="basmati rise" />
													<input type="hidden" name="amount" value="11.99" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-3 top_brand_left">
					<div className="hover14 column">
						<div className="agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<img src="../Assets/images/offer.png" alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src="../Assets/images/2.png" alt=" " className="img-responsive" /></Link>
											<p>Pepsi soft drink (2 Ltr)</p>
											<h4>$8.00 <span>$10.00</span></h4>
										</div>
										<div className="snipcart-details top_brand_home_details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="Pepsi soft drink" />
													<input type="hidden" name="amount" value="8.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-3 top_brand_left">
					<div className="hover14 column">
						<div className="agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<img src="../Assets/images/offer.png" alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<Link to="single.html"><img src="../Assets/images/4.png" alt=" " className="img-responsive" /></Link>
											<p>dogs food (4 Kg)</p>
											<h4>$9.00 <span>$11.00</span></h4>
										</div>
										<div className="snipcart-details top_brand_home_details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="dogs food" />
													<input type="hidden" name="amount" value="9.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
	</div>
{/* <!-- //top-brands --> */}
    {/* <Footer/> */}
    </>
  )
}

export default kitchen