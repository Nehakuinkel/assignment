import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./components/shared/Main";
import React from "react";
import About from "./components/General/About";
import Checkout from "./components/Checkout";
import Events from "./components/Events";
import Faqs from "./components/General/Faqs";
import Login from "./components/Users/Login";
import Mail from "./components/Users/Mail";
import Payment from "./components/Payment";
import Privacy from "./components/General/Privacy";
import Services from "./components/Services";
import Single from "./components/Single";
import Errorpage from "./components/shared/Errorpage";
import ForgotPassword from "./components/Users/ForgotPassword";
import Cart from "./components/Cart";
import ResetPassword from "./components/Users/ResetPassword";
import HomePage from "./components/HomePage";
import toast from "react-hot-toast";
import Categories from "./components/Categories/Categories";

function Routing() {
  const [productDetailsData, setproductDetailsData] = useState([]);
  const navigate = useNavigate()

  const getProductDetails = (productDetail) => {
    console.log(productDetail);
    setproductDetailsData(productDetail);
    navigate("/single");
  };

  const getItemsFromLocalStorage = () => {
    let output = localStorage.getItem("addedItems");
    if (output) {
      return JSON.parse(output);
    } else {
      return [];
    }
  };
  const [cart, setCart] = useState(getItemsFromLocalStorage());
  const addToCart = (data) => {
    const exist = cart.find((item) => {
      return item.id === data.id;
    });
    if (exist) {
      toast.error("Item already exist.");
    } else {
      toast.success("Item Added Successfully.");
      setCart([...cart, { ...data, orderedQuantity: 1 }]);
    }
  };
  // console.log(cart);

  const increment = (id) => {
    const updatedData = cart.map((item) => {
      if (item.id === id) {
        return { ...item, orderedQuantity: item.orderedQuantity + 1 };
      } else {
        return item;
      }
    });
    setCart(updatedData);
    console.log(cart);
  };

  const decrement = (id) => {
    let updateItems = cart.map((item) => {
      if (item.id === id && item.orderedQuantity > 1) {
        return { ...item, orderedQuantity: item.orderedQuantity - 1 };
      } else {
        return item;
      }
    });
    setCart(updateItems);
  };
  const removeItem = (id) => {
    const deleteItem = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(deleteItem);
  };
  const total = cart.reduce((acc, val) => {
    acc += val.orderedQuantity * val.unitPrice[0].newPrice;
    return acc;
  }, 0);

  useEffect(() => {
    localStorage.setItem("addedItems", JSON.stringify(cart));
  }, [cart]);

  return (
    <Routes>
      <Route path="/" element={<Main addToCart={addToCart} />} />
      <Route path="about" element={<About />} />
      {/* <Route
        path="single"
        element={
          <Single
            productDetailsData={productDetailsData}
            addToCart={addToCart}
          />
        }
      /> */}
      <Route
        path="/:categoryslug"
        element={
          <Categories
            addToCart={addToCart}
            getProductDetails={getProductDetails}
          />
        }
      />

      <Route
        path="single"
        element={
          <Single
            productDetailsData={productDetailsData}
            addToCart={addToCart}
          />
        }
      />
      <Route
        path="cart"
        element={
          <Cart
            cart={cart}
            setCart={setCart}
            increment={increment}
            decrement={decrement}
            removeItem={removeItem}
            total={total}
          />
        }
      />
      <Route
        path="checkout"
        element={
          <Checkout
            cart={cart}
            setCart={setCart}
            increment={increment}
            decrement={decrement}
            removeItem={removeItem}
            total={total}
          />
        }
      />
      <Route path="events" element={<Events />} />
      <Route path="faqs" element={<Faqs />} />

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Login />} />
      <Route path="forgetPassword" element={<ForgotPassword />} />

      <Route path="mail" element={<Mail />} />
      <Route path="payment" element={<Payment />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="services" element={<Services />} />
      <Route path="resetPassword" element={<ResetPassword />} />
      <Route path="home" element={<HomePage />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
}

export default Routing;
