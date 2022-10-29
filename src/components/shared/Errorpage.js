import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Errorpage() {
  let navigate = useNavigate();
  return (
    <div className="text-center">
      <h1>oops! 404 Error Page Not Found</h1>
      <p>
        Click <Link to="/"> Home </Link>to go to home page.
      </p>
      <button onClick={() => navigate("/")}>Back to Home page</button>
    </div>
  );
}

export default Errorpage;
