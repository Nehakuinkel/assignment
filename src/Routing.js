import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./components/shared/Main";
import React from "react";
import About from "./components/general/About";
import Checkout from "./components/cart/Checkout";
import Events from "./components/general/Events";
import Faqs from "./components/general/Faqs";
import Login from "./components/auth/Login";
import Mail from "./components/auth/Mail";
import Payment from "./components/cart/Payment";
import Privacy from "./components/general/Privacy";
import Services from "./components/general/Services";
import Single from "./components/cart/Single";
import Errorpage from "./components/shared/Errorpage";
import ForgotPassword from "./components/auth/ForgotPassword";
import Cart from "./components/cart/Cart";
import ResetPassword from "./components/auth/ResetPassword";
import UserProfile from "./components/users/UserProfile";
import toast from "react-hot-toast";
import Categories from "./components/products/Categories";
import Search from "./components/shared/Search";
import Products from "./components/products/Products";
import { axiosClient } from "./components/axios/Axios";

function Routing({ searchData }) {
  const [productDetailsData, setproductDetailsData] = useState([]);
  const [cartDetails, setCartDetails] = useState([]);
  const [apiCart, setapiCart] = useState([]);
  const [bool, setBool] = useState(false);
  const [token, setToken] = useState();
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);

  let productURL = `/api/v4/product?allProduct=1`;
  let addToCartURL = `/api/v4/cart-product`;
  let getCartURL = `/api/v4/cart`;

  // API Call To get all products....
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axiosClient.get(productURL);
        setProductList(response.data.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getAllProducts();
  }, []);

  // set Access Token to local Storage
  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
  });

  // Data From Search Input
  const filteredSearch =
    searchData.length < 0 ? (
      <div>No Items </div>
    ) : (
      productList.filter((product) => {
        return product.title.toLowerCase().includes(searchData.search);
      })
    );

  // Api call to add products to cart
  const addToCartItems = async (cartData) => {
    const config = {
      productId: cartData.id,
      priceId: cartData.unitPrice[0].id,
      quantity: cartData.orderedQuantity,
      note: "testing",
    };
    try {
      let response = await axiosClient.post(addToCartURL, config, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        setBool(!bool);
        // toast.success("Products add to cart");
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  // API call to get cart items
  const getCartItemsAPI = async () => {
    try {
      let response = await axiosClient.get(getCartURL, {
        headers: { Authorization: `Bearer ${token}`},
      });
        setapiCart(response.data.data.cartProducts);
        setCartDetails(response.data.data);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
      getCartItemsAPI();
  }, [bool,token]);

  //Delete Items From cart API
  const deleteCartItems = async (data) => {
    let deleteURL = `api/v4/cart-product/${data}`;
    try {
      await axiosClient.delete(deleteURL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBool(!bool);
    } catch (error) {
      console.log(error);
    }
  };

  //Update Cart quantity
  const updateCart = async (id, quantity) => {
    let updateURL = `/api/v4/cart-product/${id}`;
    const data = {
      quantity: quantity,
      note: "hello",
    };
    try {
      await axiosClient.patch(updateURL, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBool(!bool);
    } catch (error) {
      console.log(error);
    }
  };

  //Get Details Of a single product
  const getProductDetails = (productDetail) => {
        setproductDetailsData(productDetail);
        navigate("/productDetails");
  };

  //add to cart handler
  const addToCart = (data) => {
    if (token) {
      const exist = apiCart.find((item) => {
        return item.product.id === data.id;
      });

      if (exist) {
        toast.error("Item already exist.");
      } else {
        toast.success("Item Added to Cart.");
        const addItemToCartApi = { ...data, orderedQuantity: 1 };
        console.log("addItemToCartApi", addItemToCartApi);
        // setCart([...cart, addItemToCartApi]);
        addToCartItems(addItemToCartApi);
      }
    } else {
      console.log("Please login or signup to add products to cart.");
      navigate("/login");
    }
  };

  // Increment Handler
  const increment = (id, quantity) => {
    updateCart(id, quantity + 1);
  };

  //decrement Handler
  const decrement = (id, quantity) => {
    if ( quantity !== 1) {
    updateCart(id, quantity - 1);
    }
  };

  // To Remove Item from cart
  const removeItem = (id) => {
    deleteCartItems(id);
  };


  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Main
            addToCart={addToCart}
            productList={productList}
            getProductDetails={getProductDetails}
          />
        }
      />

      {/* Static Routes */}
      <Route path="about" element={<About />} />
      <Route path="events" element={<Events />} />
      <Route path="faqs" element={<Faqs />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="services" element={<Services />} />

      {/* Dynamic Routes */}
      <Route
        exact
        path="category/:categoryslug"
        element={
          <Categories
            addToCart={addToCart}
            getProductDetails={getProductDetails}
            productList={productList}
          />
        }
      />
        
      {/* Route To get Single product Details */}
      <Route
        /* path="product/:productSlug" */
        path="productDetails"
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
             apiCart={apiCart}
            cartDetails={cartDetails} 
            increment={increment}
            decrement={decrement}
            removeItem={removeItem}
            token={token}
          />
        }
      />

      <Route
        path="checkout"
        element={
          <Checkout
            token={token}
            setToken={setToken} 
            apiCart={apiCart}
            cartDetails={cartDetails}
            increment={increment}
            decrement={decrement}
            removeItem={removeItem}
          />
        }
      />

      {/* Auth Route */}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Login />} />
      <Route path="forgetPassword" element={<ForgotPassword />} />
      <Route path="resetPassword" element={<ResetPassword />} />

      <Route
        path="products"
        element={
          <Products
            productList={productList}
            addToCart={addToCart}
            getProductDetails={getProductDetails}
          />
        }
      />

      <Route
        path="search"
        element={
          <Search
            addToCart={addToCart}
            filteredSearch={filteredSearch}
            searchData={searchData}
            getProductDetails={getProductDetails}
          />
        }
      />
      <Route path="mail" element={<Mail />} />
      <Route path="payment" element={<Payment />} />

      <Route
        path="profile"
        element={
          <UserProfile
            token={token}
          />
        }
      />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
}

export default Routing;
