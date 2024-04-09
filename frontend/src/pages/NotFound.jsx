import React from "react";
import NotFoundImage from "../assets/404.jpg";
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img
        src={NotFoundImage}
        className="max-w-full max-h-full"
        alt="Page not found"
      />
      <h1 className="text-4xl mb-10 text-gray-800">Looks like you're lost.</h1>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to home page
      </Link>
    </div>
  );
};

export default NotFound;
