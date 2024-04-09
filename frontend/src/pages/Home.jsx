import React from "react";
import books from "../assets/books.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <img src={books} className="max-w-xs h-auto mb-8" alt="Books" />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to PageTurner
      </h1>
      <p className="text-lg text-gray-600 text-center">
        Explore a vast collection of books from various genres and authors. Find
        your next favorite read with PageTurner.
      </p>
      <Link to="/books">
        <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Home;
