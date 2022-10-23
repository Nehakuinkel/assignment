import React from 'react'
import { useForm } from 'react-hook-form';
// import { schema } from './Validate';
// import { yupResolver } from '@hookform/resolvers/yup';

function FormValidate() {
    const { register, handleSubmit } = useForm(
    //     {
    // //     resolver: yupResolver(schema),
    // // }
    );
    const onFormSubmit = data => console.log(data);
    //fetch data here
    const onErrors = err => console.log(err);
    

  return (
    <div>
    <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
    <div>
    <label>Name: </label>
    <input 
        placeholder='First Name'
        type="text" 
        name="firstname" 
         {...register('firstname')}  
    />
    {/* <p> {errors.firstname?.message} </p> */}
    </div>
   <div>
    <label>Email</label>
    <input 
        placeholder='Email'
        type="email" 
        name="email" 
          {...register('firstname')}  
    />
    {/* <p> {errors.email?.message} </p> */}
   </div>
   <div>
    <label>Contact Number: </label>
    <input 
        placeholder='Contact Number'
        type="number" 
        name="phone" 
     
         {...register('firstname')}  
    />
    {/* <p> {errors.phone?.message} </p> */}
   </div>
   <div>
    <label>Password</label>
    <input 
        placeholder='Password'
        type="password" 
        name="password" 
          {...register('firstname')}  
    />
    {/* <p> {errors.password?.message} </p> */}
   </div>
   <div>
    <label> Confirm Password</label>
    <input 
        type="cpassword" 
        name="cpassword" 
          {...register('firstname')}  
    /> 
    {/* <p> {errors.cpassword && "Password should match"} </p> */}
    </div>
    {/* <div>
        <select name="state" {...register('state')}>
            <option selected>Select Country</option>
            <option value="nepal">Nepal</option>
            <option value="india">India</option>
            <option value="china">China</option>
            <option value="japan">japan</option>
        </select>
    <p> {errors.state?.message} </p>
    </div> */}
    <button>Submit</button>
    </form>
    
</div>
  )
}

export default FormValidate