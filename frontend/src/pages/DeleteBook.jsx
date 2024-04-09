import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import AtomicSpinner from "atomic-spinner";
import {useToast} from "@chakra-ui/react"

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const toast = useToast();

  const handleDeleteBook = async () => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
      setLoading(false);
      toast({
        title: "Book deleted successfully",
        description:
          "Book has been deleted successfully. You can now view it on the main page.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/books");
    } catch (error) {
      setLoading(false);
      console.error("Error deleting book:", error);
      toast({
        title: "An error occurred",
        description:
          "An error occurred while deleting the book. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <AtomicSpinner />
        </div>
      )}
      <BackButton />
      <div className="flex justify-center items-center h-screen text-center">
        <div className="p-6 border border-gray-300 rounded">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Delete Book</h1>
          <p className="text-gray-800 mb-4">
            Are you sure you want to delete this book?
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleDeleteBook}
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            >
              {loading ? "Loading..." : "Delete"}
            </button>
            <button
              onClick={() => navigate("/books")}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteBook;
