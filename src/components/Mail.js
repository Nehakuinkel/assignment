import React from 'react'
// import Footer from './shared/Footer'
// import Header from './shared/Header'
import Navbarleft from './shared/Navbarleft'
import { Link } from 'react-router-dom'

function Mail() {
  return (
    <>
    {/* <Header/> */}
    {/* <!-- products-breadcrumb --> */}
	<div className="products-breadcrumb">
		<div className="container">
			<ul>
				<li><i className="fa fa-home" aria-hidden="true"></i><Link to="index.html">Home</Link><span>|</span></li>
				<li>Mail Us</li>
			</ul>
		</div>
	</div>
  {/* <!-- //products-breadcrumb -->
<!-- banner --> */}
	<div className="banner">
		<Navbarleft/>
		<div className="w3l_banner_nav_right">
{/* <!-- mail --> */}
		<div className="mail">
			<h3>Mail Us</h3>
			<div className="agileinfo_mail_grids">
				<div className="col-md-4 agileinfo_mail_grid_left">
					<ul>
						<li><i className="fa fa-home" aria-hidden="true"></i></li>
						<li>address<span>868 1st Avenue NYC.</span></li>
					</ul>
					<ul>
						<li><i className="fa fa-envelope" aria-hidden="true"></i></li>
						<li>email<span><Link to="mailto:info@example.com">info@example.com</Link></span></li>
					</ul>
					<ul>
						<li><i className="fa fa-phone" aria-hidden="true"></i></li>
						<li>call to us<span>(+123) 233 2362 826</span></li>
					</ul>
				</div>
				<div className="col-md-8 agileinfo_mail_grid_right">
					<form action="#" method="post">
						<div className="col-md-6 wthree_contact_left_grid">
							<input type="text" name="Name" value="Name*" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name*';}" required=""/>
							<input type="email" name="Email" value="Email*" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email*';}" required=""/>
						</div>
						<div className="col-md-6 wthree_contact_left_grid">
							<input type="text" name="Telephone" value="Telephone*" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Telephone*';}" required=""/>
							<input type="text" name="Subject" value="Subject*" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Subject*';}" required=""/>
						</div>
						<div className="clearfix"> </div>
						<textarea  name="Message" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required="">Message...</textarea>
						<input type="submit" value="Submit"/>
						<input type="reset" value="Clear"/>
					</form>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
{/* <!-- //mail --> */}
		</div>
		<div className="clearfix"></div>
	</div>
{/* <!-- //banner -->
<!-- map --> */}
	{/* <div className="map">
		<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d96748.15352429623!2d-74.25419879353115!3d40.731667701988506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshopping+mall+in+New+York%2C+NY%2C+United+States!5e0!3m2!1sen!2sin!4v1467205237951" style="border:0"></iframe>
	</div> */}
{/* <!-- //map --> */}
    {/* <Footer/> */}
    </>
    
  )
}

export default Mail