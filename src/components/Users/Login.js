import React, {useState} from 'react'
import Navbarleft from '../shared/Navbarleft'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { registerOptions } from '../shared/formValidate'
import '../../form.css';
import axios from 'axios'

function Login() {
	const navigate = useNavigate();
	const [status, setStatus] = useState();
	const { register, handleSubmit, resetField, formState: { errors } } = useForm({
		mode: "onTouched"
	});
	
	const handleRegistration = (data) =>{
		resetField('username');
		resetField('first_name');
		resetField('last_name');
		resetField('Email');
		resetField('Telephone');
		resetField('password');
		console.log(data);
			if(window.location.pathname === "/login"){
				axios({
					method: 'post',
					// url: 'https://uat.ordering-farmshop.ekbana.net/api/v4/auth/login',
					data: {
					username: data.username,
					password: data.password,
					  client_id: 2,
					  client_secret:"2TJrcyMbXT6gDQXVqeSlRbOKvtTfMsuxfuK6vpey",
					  grant_type:'password'
					},
					headers: {
						"Api-key": process.env.API_KEY,
				  },
				  url: 'https://uat.ordering-farmshop.ekbana.net/api/v4/auth/login',
				  }).then((response) => {
						setStatus(response.status)
					  
				  });
			}
			if(window.location.pathname === "/signup"){
				axios({
    				method: 'post',
    				url: 'https://uat.ordering-farmshop.ekbana.net/api/v4/auth/signup',
    				data: {
        				first_name: data.first_name,
        				last_name: data.last_name,
      					email: data.Email,
      					password: data.password,
      					mobile_number:data.Telephone
    				},
    				// headers: {
        			// 	"Api-key": `${process.env.API_KEY}`,	
          			// },
				}).then((response) => {
					console.log(response);
  					setStatus(response.status)
				});;
			}
		}
		
	if(window.location.pathname === "/login"){ 
		return(
			
			<>
			<div className="products-breadcrumb">
				<div className="container">
					<ul>
						<li><i className="fa fa-home" aria-hidden="true"></i><Link to="/">Home</Link><span>|</span></li>
						<li>Sign In</li>
					</ul>
				</div>
			</div>
		
			<div className="banner">
				<Navbarleft/>
				<div className="w3l_banner_nav_right">
				<div className="w3_login">
				{status === 200 && navigate("/")}
					<h3>Sign In</h3>
					<div className="w3_login_module">
						<div className="module form-module">
							<div >
							
							<h2>Login to your account</h2>
							<form onSubmit={handleSubmit(handleRegistration)} action="#" method="post">
							 
							  <input 
							  type="text"  
							  placeholder="Username" 
							  name="username"
							  {...register('username')}
							  />
							  {errors?.Name && <span className='error-text'>{errors.Name.message}</span>}	
							  
							  <input 
							  type="password"  
							  placeholder="Password"
							  name="password"
							  {...register('password')}
							  />
							  {errors?.password && <span className='error-text'>{errors.password.message}</span>}
							  <input type="submit" value="Login"/>
							</form>
						  	</div>
						  <div className="cta"><Link to="/forgetPassword">Forgot your password?</Link></div>
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
			<div className="products-breadcrumb">
				<div className="container">
					<ul>
						<li><i className="fa fa-home" aria-hidden="true"></i><Link to="/">Home</Link><span>|</span></li>
						<li>Sign Up</li>
					</ul>
				</div>
			</div>

			<div className="banner">
				<Navbarleft/>
				<div className="w3l_banner_nav_right">
				<div className="w3_login">
				{status === 201 && (
            <div class="alert alert-success alert-dismissible" role="alert">
              <strong>Account Created Successfully.</strong>
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              {navigate("/login")}
			  </div>)}
				
					<h3>Sign Up</h3>
					<div className="w3_login_module">
						<div className="module form-module">
							
							<div>
							<h2>Create an account</h2>
							<form onSubmit={handleSubmit(handleRegistration)} action="#" method="post">
							  <input 
							  type="text" 
							  placeholder="First Name" 
							  {...register('first_name', registerOptions.Name)}
							 />
							{errors?.Name && <span className='error-text'>{errors.Name.message}</span>}
							<input 
							  type="text" 
							  placeholder="Last Name" 
							  {...register('last_name', registerOptions.Name)}
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
						  <div className="cta"><Link to="forgetPassword">Forgot your password?</Link></div>
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