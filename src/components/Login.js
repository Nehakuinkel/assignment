import React from 'react'
import Footer from './shared/Footer'
import Header from './shared/Header'
import Navbarleft from './shared/Navbarleft'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <Header/>
    {/* <!-- products-breadcrumb --> */}
	<div className="products-breadcrumb">
		<div className="container">
			<ul>
				<li><i className="fa fa-home" aria-hidden="true"></i><Link to="index.html">Home</Link><span>|</span></li>
				<li>Sign In & Sign Up</li>
			</ul>
		</div>
	</div>
{/* <!-- //products-breadcrumb -->
<!-- banner --> */}
	<div className="banner">
		<Navbarleft/>
		<div className="w3l_banner_nav_right">
{/* <!-- login --> */}
		<div className="w3_login">
			<h3>Sign In & Sign Up</h3>
			<div className="w3_login_module">
				<div className="module form-module">
				  <div className="toggle"><i className="fa fa-times fa-pencil"></i>
					<div className="tooltip">Click Me</div>
				  </div>
				  <div className="form">
					<h2>Login to your account</h2>
					<form action="#" method="post">
					  <input type="text" name="Username" placeholder="Username" required=" "/>
					  <input type="password" name="Password" placeholder="Password" required=" "/>
					  <input type="submit" value="Login"/>
					</form>
				  </div>
				  <div className="form">
					<h2>Create an account</h2>
					<form action="#" method="post">
					  <input type="text" name="Username" placeholder="Username" required=" "/>
					  <input type="password" name="Password" placeholder="Password" required=" "/>
					  <input type="email" name="Email" placeholder="Email Address" required=" "/>
					  <input type="text" name="Phone" placeholder="Phone Number" required=" "/>
					  <input type="submit" value="Register"/>
					</form>
				  </div>
				  <div className="cta"><Link to="#">Forgot your password?</Link></div>
				</div>
			</div>
			{/* <script>
				$('.toggle').click(function(){
				  // Switches the Icon
				  $(this).children('i').toggleclassName('fa-pencil');
				  // Switches the forms  
				  $('.form').animate({
					height: "toggle",
					'padding-top': 'toggle',
					'padding-bottom': 'toggle',
					opacity: "toggle"
				  }, "slow");
				});
			</script> */}
		</div>
{/* <!-- //login --> */}
		</div>
		<div className="clearfix"></div>
	</div>
{/* <!-- //banner -->
<!-- newsletter-top-serv-btm --> */}
	<div className="newsletter-top-serv-btm">
		<div className="container">
			<div className="col-md-4 wthree_news_top_serv_btm_grid">
				<div className="wthree_news_top_serv_btm_grid_icon">
					<i className="fa fa-shopping-cart" aria-hidden="true"></i>
				</div>
				<h3>Nam libero tempore</h3>
				<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
					saepe eveniet ut et voluptates repudiandae sint et.</p>
			</div>
			<div className="col-md-4 wthree_news_top_serv_btm_grid">
				<div className="wthree_news_top_serv_btm_grid_icon">
					<i className="fa fa-bar-chart" aria-hidden="true"></i>
				</div>
				<h3>officiis debitis aut rerum</h3>
				<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
					saepe eveniet ut et voluptates repudiandae sint et.</p>
			</div>
			<div className="col-md-4 wthree_news_top_serv_btm_grid">
				<div className="wthree_news_top_serv_btm_grid_icon">
					<i className="fa fa-truck" aria-hidden="true"></i>
				</div>
				<h3>eveniet ut et voluptates</h3>
				<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
					saepe eveniet ut et voluptates repudiandae sint et.</p>
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>
{/* <!-- //newsletter-top-serv-btm --> */}
    <Footer/>
    </>
  )
}

export default Login