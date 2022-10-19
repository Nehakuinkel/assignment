import {  
  Routes, 
  Route, 
  Navigate } 
  from "react-router-dom";
  
import Index from "./components/Index";
import React from 'react'
// import About from "./components/About";
// import Bread from "./components/Bread";
import Checkout from "./components/Bread";
import Drinks from "./components/Drinks";
import Events from "./components/Events";
import Faqs from "./components/Faqs";
import Frozen from "./components/Frozen";
import Household from "./components/Household";
import Kitchen from "./components/kitchen";
import Login from "./components/Login";
import Mail from "./components/Mail";
import Payment from "./components/Payment";
import Pet from "./components/Pet";
import Privacy from "./components/Privacy";
import Products from "./components/Products";
import Services from "./components/Services";
import ShortCodes from "./components/Short-codes";
import Single from "./components/Single";
import Vegetables from "./components/Vegetables";

function Routing() {
  return (
      <Routes>
        <Route path='/' element={<Index/>}/>
        {/* <Route path="about" element={<About/>}/> */}
        {/* <Route path="bread" element={<Bread/>}/> */}
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="drinks" element={<Drinks/>}/>
        {/* <Route path="events" element={<Events/>}/> */}
        <Route path="faqs" element={<Faqs/>}/>
        <Route path="frozen" element={<Frozen/>}/>
        <Route path="household" element={<Household/>}/>
        <Route path="kitchen" element={<Kitchen/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="mail" element={<Mail/>}/>
        <Route path="payment" element={<Payment/>}/>
        <Route path="pet" element={<Pet/>}/>
        <Route path="privacy" element={<Privacy/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="shortcodes" element={<ShortCodes/>}/>
        <Route path="single" element={<Single/>}/>
        <Route path="vegetables" element={<Vegetables/>}/>


        {/* <Route path="signin" element={<Signin/>}>
          <Route path = "admin" element={<Admin/>}/>
          <Route path = "user" element={<User/>}/>
        </Route>

        <Route path="signin/:userName" element={<Dashboard/>}/>
        <Route path="docs/:docName" element={<DynamicPage/>}/> */}

        <Route path="/" element = {<Navigate replace to="/"/>}/>

      </Routes>
  )
}

export default Routing