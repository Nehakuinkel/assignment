import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./profile.css";

function UserProfile({ token, setToken }) {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  let userURL = `https://uat.ordering-farmshop.ekbana.net/api/v4/profile/show`;
  let addToCartURL = `https://uat.ordering-farmshop.ekbana.net/api/v4/cart`;
  const getProfile = async () => {
    try {
      const response = await axios({
        method: "get",
        url: userURL,
        headers: {
          "Api-key": process.env.REACT_APP_API_KEY,
          "Warehouse-Id": 1,
          Authorization: `Bearer ${token}`,
        },
      });
      setUserList(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, [token]);
  console.log("userList", userList);


  // const getApiCartItems = async () => {
  //   let config = {
  //     method: "get",
  //     url: addToCartURL,
  //     headers: {
  //       "Api-key": process.env.REACT_APP_API_KEY,
  //       "Warehouse-Id": 1,
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   let res = await axios(config);
  //   console.log(res);
  //   if (res.status === 200) {
  //     toast.success("Ordered Confirmed.");
  //   }
  // };
  // getApiCartItems()


  const logout = () => {
    setToken(localStorage.clear());
    navigate("/");
  };
  return (
    <>
      <div className="banner">
        <h3> Manage Profile </h3>
        <div className="wrapper">
          <div className="prof-right">
            <img
              className="pro-img"
              src={userList.image}
              alt="user Profile"
            ></img>
            <p>
              {userList.firstName} {userList.lastName}
            </p>
          </div>
          <div className="details">
            <form>
              <div className="controls">
                <label className="control-label"> Email: </label>
                <input type="text" value={userList.email} />
              </div>
              <div className="controls">
                <label className="control-label"> Mobile Number: </label>
                <input type="text" value={userList.mobileNumber} />
              </div>
            </form>
          </div>
        </div>
      </div>
      <h1> This is Home Page</h1>

      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </>
  );
}

export default UserProfile;
