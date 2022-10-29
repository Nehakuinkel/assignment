import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/shared/Main";
import React from "react";
import About from "./components/General/About";
import Bread from "./components/Bread";
import Checkout from "./components/Checkout";
import Drinks from "./components/Drinks";
import Events from "./components/Events";
import Faqs from "./components/General/Faqs";
import Frozen from "./components/Frozen";
import Household from "./components/Household";
import Kitchen from "./components/kitchen";
import Login from "./components/Users/Login";
import Mail from "./components/Users/Mail";
import Payment from "./components/Payment";
import Pet from "./components/Pet";
import Privacy from "./components/General/Privacy";
import Products from "./components/Products";
import Services from "./components/Services";
import ShortCodes from "./components/General/Short-codes";
import Single from "./components/Single";
import Vegetables from "./components/Vegetables";
import Errorpage from "./components/shared/Errorpage";
import ForgotPassword from "./components/Users/ForgotPassword";
import Cart from "./components/Cart";
import ResetPassword from "./components/Users/ResetPassword";
import HomePage from "./components/HomePage";
import toast from "react-hot-toast";
import Categories from "./components/Categories/Categories";

function Routing() {
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
  console.log(cart);

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
      {/* <Route path="*" element={<Errorpage />} /> */}
      <Route path="/" element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="/:categoryslug" element={<Categories addToCart={addToCart} />} />

      <Route path="bread" element={<Bread />} />
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
      <Route path="drinks" element={<Drinks />} />
      <Route path="events" element={<Events />} />
      <Route path="faqs" element={<Faqs />} />
      <Route path="frozen" element={<Frozen />} />
      <Route path="household" element={<Household />} />
      <Route path="kitchen" element={<Kitchen />} />

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Login />} />
      <Route path="forgetPassword" element={<ForgotPassword />} />

      <Route path="mail" element={<Mail />} />
      <Route path="payment" element={<Payment />} />
      <Route path="pet" element={<Pet />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="products" element={<Products />} />
      <Route path="services" element={<Services />} />
      <Route path="shortcodes" element={<ShortCodes />} />
      <Route path="single" element={<Single />} />
      <Route path="vegetables" element={<Vegetables addToCart={addToCart} />} />
      <Route path="resetPassword" element={<ResetPassword />} />
      <Route path="home" element={<HomePage />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
}

export default Routing;
