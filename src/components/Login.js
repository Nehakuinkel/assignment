import React from 'react'
import Navbarleft from './shared/Navbarleft'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { registerOptions } from './shared/formValidate'
import '../form.css';

function Login() {
	
	const { register, handleSubmit, formState: { errors } } = useForm({
		mode: "onTouched",
		defaultValues:{
			Name:"Full Name",

		}
	});
	
	const handleRegistration = (data) => console.log(data);
	if(window.location.pathname === "/login"){ 
		return(
			<>
			{/* <Header/> */}
			{/* <!-- products-breadcrumb --> */}
			<div className="products-breadcrumb">
				<div className="container">
					<ul>
						<li><i className="fa fa-home" aria-hidden="true"></i><Link to="/">Home</Link><span>|</span></li>
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
								<div >
							<h2>Login to your account</h2>
							<form onSubmit={handleSubmit(handleRegistration)} action="#" method="post">
							 
							  <input 
							  type="text"  
							  placeholder="Username" 
							  {...register('Email', registerOptions.Email)}
							  />
							  {errors?.Email && <span className='error-text'>{errors.Email.message}</span>}	
							  
							  <input 
							  type="password"  
							  placeholder="Password"
							  />
							  <input type="submit" value="Login"/>
							</form>
						  </div>
						  
						  <div className="cta"><Link to="#">Forgot your password?</Link></div>
						</div>
					</div>
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
			{/* <Footer/> */}
			</>
		)
	}
	if(window.location.pathname === "/signup") {
		return (
			<>
			{/* <Header/> */}
			{/* <!-- products-breadcrumb --> */}
			<div className="products-breadcrumb">
				<div className="container">
					<ul>
						<li><i className="fa fa-home" aria-hidden="true"></i><Link to="/">Home</Link><span>|</span></li>
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
							<div>
							<h2>Create an account</h2>
							<form onSubmit={handleSubmit(handleRegistration)} action="#" method="post">
							  <input 
							  type="text" 
							  placeholder="Username" 
							  {...register('Name', registerOptions.Name)}
							 />
							{errors?.Name && <span className='error-text'>{errors.Name.message}</span>}
		
							  <input 
							  type="password"  
							  placeholder="Password" 
							  {...register('password', registerOptions.password)}
							  />
							{errors?.password && <span className='error-text'>{errors.password.message}</span>}
		
							  <input 
							  type="email" 
							  placeholder="Email Address"
							  {...register('Email', registerOptions.Email)}
									 
									/>
									{errors?.Email && <span className='error-text'>{errors.Email.message}</span>}
							  <input 
							  type="text"  
							  placeholder="Phone Number" 
							  {...register('Telephone', registerOptions.Telephone)}
							  />
							  {errors?.Telephone && <span className='error-text'>{errors.Telephone.message}</span>}
							  <input type="submit" value="Register"/>
							</form>
						  </div>
						  <div className="cta"><Link to="#">Forgot your password?</Link></div>
						</div>
					</div>
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
			{/* <Footer/> */}
			</>
		  )
	}
 
}

export default Login