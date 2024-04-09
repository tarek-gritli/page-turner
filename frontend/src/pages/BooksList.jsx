import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/books");
        setBooks(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="p-4 m-10">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">Books List</h1>
        <div className="flex items-center">
          <Link to="/books/create">
            <FontAwesomeIcon icon={faSquarePlus} className="text-xl text-blue-500 hover:text-blue-700 cursor-pointer" />
          </Link>
          <span className="text-sm ml-2 text-gray-500">Add New Book</span>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {books.map((book) => (
          <BookCard book={book} key={book._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
