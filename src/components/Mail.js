import React from 'react'
import Navbarleft from './shared/Navbarleft'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { registerOptions } from './shared/formValidate'
import '../form.css';

function Mail() {
	const { register, handleSubmit, resetField, formState: { errors } } = useForm({
		mode: "onTouched"
	});
	
	const handleRegistration = (data) =>{
		resetField('Name');
		resetField('Email');
		resetField('Telephone');
		resetField('Subject');
		resetField('Message');
		console.log(data);
		
	} 
	// const handleError = (errors) => {};

	return (
    <>
	<div className="products-breadcrumb">
		<div className="container">
			<ul>
				<li><i className="fa fa-home" aria-hidden="true"></i><Link to="/">Home</Link><span>|</span></li>
				<li>Mail Us</li>
			</ul>
		</div>
	</div>

	<div className="banner">
		<Navbarleft/>
		<div className="w3l_banner_nav_right">


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
					<form onSubmit={handleSubmit(handleRegistration)} action="#" method="post">
						<div className="col-md-6 wthree_contact_left_grid">
							<input type="text"
							placeholder='Enter Full Name*'
							 {...register('Name', registerOptions.Name)}
							 
							/>
							{errors?.Name && <span className='error-text'>{errors.Name.message}</span>}
						
							<input
							type="email" 
							placeholder='Email*'
							{...register('Email', registerOptions.Email)}
							/>
							
							{errors?.Email && <span className='error-text'>{errors.Email.message}</span>}	
						</div>

						
						<div class="col-md-6 wthree_contact_left_grid">
							<input
							 type="text"
							 placeholder="Contact Number*"
							 {...register('Telephone', registerOptions.Telephone)}
							/>
							{errors?.Telephone && <span className='error-text'>{errors.Telephone.message}</span>}	

							<input type="text"
							placeholder="Subject*" 
							{...register('Subject', registerOptions.Subject)}
							 />
							 {errors?.Subject && <span className='error-text'>{errors.Subject.message}</span>}	
						</div>

						<div className="clearfix"> </div>

						<div>
						<textarea  
						name="Message" 
						placeholder='Message'
						{...register('Message', registerOptions.Subject)}
						/>
						</div>
						<input className='mt-3' type="submit" value="Submit"/>
						<input type="reset" value="Clear"/>
					</form>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>

		</div>
		<div className="clearfix"></div>
	</div>
{/* <!-- //banner -->
<!-- map --> */}
	<div className="map">
	<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14133.53388427819!2d85.44787165!3d27.6745405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1666458681973!5m2!1sen!2snp"></iframe>
	</div>
{/* <!-- //map --> */}
    {/* <Footer/> */}
    </>
    
  )
}

export default Mail