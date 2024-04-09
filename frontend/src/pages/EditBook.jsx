import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { handleInputChange, validateInputs } from "../utils/helpers";
import BookForm from "../components/BookForm";
import AtomicSpinner from "atomic-spinner";
import {useToast} from "@chakra-ui/react"

const EditBook = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    imageUrl: "https://bookstore.usip.org/publishers/default_cover.png",
    publishYear: "",
    description: "",
    genre: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const toast = useToast()

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/books/${id}`);
        setBookData(response.data);
        setLoading(false);
      } catch (err) {
        navigate("/books")
        console.log(err);
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const handleEditBook = async () => {
    if (!validateInputs({ bookData, setErrors })) {
      return;
    }
    setLoading(true);
    try {
      await axios.put(`http://localhost:3000/books/${id}`, bookData);
      setLoading(false)
      toast({
        title: "Book updated successfully",
        description: "Book has been updated successfully. You can now view it on the main page.",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      navigate("/books");
    } catch (error) {
      setLoading(false)
      toast({
        title: "An error occurred",
        description: "An error occurred while updating the book. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
      console.error("Error editing book:", error);
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
      <div className="p-4">
        <BookForm
          bookData={bookData}
          setBookData={setBookData}
          errors={errors}
          handleInputChange={handleInputChange}
          handleSubmit={handleEditBook}
        />
      </div>
    </>
  );
};

export default EditBook;
