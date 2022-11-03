import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./components/shared/Main";
import React from "react";
import About from "./components/General/About";
import Checkout from "./components/Checkout";
import Events from "./components/General/Events";
import Faqs from "./components/General/Faqs";
import Login from "./components/Users/Login";
import Mail from "./components/Users/Mail";
import Payment from "./components/Payment";
import Privacy from "./components/General/Privacy";
import Services from "./components/General/Services";
import Single from "./components/Single";
import Errorpage from "./components/shared/Errorpage";
import ForgotPassword from "./components/Users/ForgotPassword";
import Cart from "./components/Cart";
import ResetPassword from "./components/Users/ResetPassword";
import UserProfile from "./components/UserProfile";
import toast from "react-hot-toast";
import Categories from "./components/Categories/Categories";
import axios from "axios";
import Search from "./components/shared/Search";

function Routing({ setSearchData, searchData }) {
  const [productDetailsData, setproductDetailsData] = useState([]);
  const [cartDetails, setCartDetails] = useState([]);
  const [apiCart, setapiCart] = useState([]);
  const [token, setToken] = useState();
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  let productURL = `https://uat.ordering-farmshop.ekbana.net/api/v4/product`;
  let addToCartURL = `https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product`;
  //let deleteCartURL = `https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product`;
  let getCartURL = `https://uat.ordering-farmshop.ekbana.net/api/v4/cart`;

  // API Call To get all products....
  useEffect(() => {
  const getAllProducts = () => {
    axios({
      method: "get",
      url: productURL,
      params: {
        allProduct: 1,
      },
      headers: {
        "Api-key": process.env.REACT_APP_API_KEY,
        "Warehouse-Id": 1,
      },
    })
      .then((response) => {
        setProductList(response.data.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  getAllProducts(); 
  }, []);
  // console.log("productList", productList);

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
    let response = await axios({
      method: "post",
      url: addToCartURL,
      data: {
        productId: cartData.id,
        priceId: cartData.unitPrice[0].id,
        quantity: cartData.orderedQuantity,
        note: "testing",
      },
      headers: {
        "Api-key": process.env.REACT_APP_API_KEY,
        "Warehouse-Id": 1,
        Authorization: `Bearer ${token}`,
      },
    });
    //console.log("response from add cart", response);
    // if (response.status === 200) {
    //   toast.success("Products add to cart");
    // }
  };

  // API call to get cart items
  const getCartItemsAPI = async () => {
    let response = await axios({
      method: "get",
      url: getCartURL,
      headers: {
        "Api-key": process.env.REACT_APP_API_KEY,
        "Warehouse-Id": 1,
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("response from add cart", response);
    if (response.status === 200) {
      setapiCart(response.data.data.cartProducts);
      setCartDetails(response.data.data);
    }
  };

  useEffect(() => {
    getCartItemsAPI();
  }, [token]);
  console.log("from carts", apiCart);
  // console.log("Cart Details", cartDetails);

  //Delete Items From cart API
  const deleteCartItems = async (data) => {
    let config = {
      method: "delete",
      url: `https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product/${data}`,

      headers: {
        "Api-key": process.env.REACT_APP_API_KEY,
        "Warehouse-Id": 1,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    let res = await axios(config);
    console.log(res, "Delete");
  };
  

  //Update Cart quantity
  const updateCart = async (id, quantity) => {
    let response = await axios({
      method: "patch",
      url: `https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product/${id}`,
      data: {
        quantity: quantity,
        note: "hello",
      },
      headers: {
        "Api-key": process.env.REACT_APP_API_KEY,
        "Warehouse-Id": 1,
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("response from update cart", response);
  };

  //Get Details Of a single product
  const getProductDetails = (productDetail) => {
    console.log(productDetail);
    setproductDetailsData(productDetail);
    navigate("/single");
  };

  // Get Items added to cart From local storage
  // const getItemsFromLocalStorage = () => {
  //   let output = localStorage.getItem("addedItems");
  //   if (output) {
  //     return JSON.parse(output);
  //   } else {
  //     return [];
  //   }
  // };

  // When Add to cart button is clicked....
  // const [cart, setCart] = useState(getItemsFromLocalStorage());
  const addToCart = (data) => {
    console.log("apicart",apiCart)
    console.log("data", data);
    if (token) {
      // console.log("Logged In Successfully");
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
  // console.log(cart);

  // Increment Handler
  const increment = (id, quantity) => {
    updateCart(id, quantity + 1);
    // const updatedData = cart.map((item) => {
    //   if (item.id === id) {
    //     return { ...item, orderedQuantity: item.orderedQuantity + 1 };
    //   } else {
    //     return item;
    //   }
    // });
    // setCart(updatedData);
    // console.log(cart);
  };

  //decrement Handler
  const decrement = (id, quantity) => {
    updateCart(id, quantity - 1);
    // let updateItems = cart.map((item) => {
    //   if (item.id === id && item.orderedQuantity > 1) {
    //     return { ...item, orderedQuantity: item.orderedQuantity - 1 };
    //   } else {
    //     return item;
    //   }
    // });
    // setCart(updateItems);
  };

  // To Remove Item from cart
  const removeItem = (id) => {
    deleteCartItems(id);
    // console.log("Delete Items", id)
    // const deleteItem = cart.filter((item) => {
    //   return item.id !== id;
    // });
    // setCart(deleteItem);
  };

  // // To Count Total from cart
  // const total = cart.reduce((acc, val) => {
  //   acc += val.orderedQuantity * val.unitPrice[0].newPrice;
  //   return acc;
  // }, 0);

  // Total for Api cart Items
  const total = apiCart.reduce((acc, val) => {
    acc += val.quantity * val.price;
    return acc;
  }, 0);

  //To add Items to Cart in Local Storage
  // useEffect(() => {
  //   localStorage.setItem("addedItems", JSON.stringify(cart));
  // }, [cart]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            addToCart={addToCart}
            productList={productList}
            setproductDetailsData={setproductDetailsData}
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
        path="category/:categoryslug"
        element={
          <Categories
            addToCart={addToCart}
            getProductDetails={getProductDetails}
            productList={productList}
            setproductDetailsData={setproductDetailsData}
          />
        }
      />

      {/* Route To get Single product Details */}
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
            apiCart={apiCart}
            cartDetails={cartDetails}
            /* cart={cart}
            setCart={setCart} */
            increment={increment}
            decrement={decrement}
            removeItem={removeItem}
            total={total}
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
            total={total}
          />
        }
      />

      {/* Users Route */}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Login />} />
      <Route path="forgetPassword" element={<ForgotPassword />} />
      <Route path="resetPassword" element={<ResetPassword />} />

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
            setToken={setToken}
            addToCart={addToCart}
            getProductDetails={getProductDetails}
            productList={productList}
            setproductDetailsData={setproductDetailsData}
          />
        }
      />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
}

export default Routing;
