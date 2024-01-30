import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div>404 page not found</div>
      <Link to='/login'>
        <button className="w-full border h-12 bg-emerald-300">
          Go back to login
        </button>
      </Link>
    </>
  );
};

export default ErrorPage;
