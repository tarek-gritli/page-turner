import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import { handleInputChange, validateInputs } from "../utils/helpers";
import BookForm from "../components/BookForm";
import AtomicSpinner from "atomic-spinner"
import { useToast } from "@chakra-ui/react";

const CreateBook = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    imageUrl: "https://bookstore.usip.org/publishers/default_cover.png",
    publishYear: "",
    description: "No description provided",
    genre: "No genre specified",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const toast = useToast();

  const handleCreateBook = async () => {
    if (!validateInputs({ bookData, setErrors })) {
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/books",
        bookData
      );
      setLoading(false);
      toast({
        title: "Book created successfully",
        description:
          "Book has been created successfully. You can now view it on the main page.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/books");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast({
        title: "An error occurred",
        description:
          "An error occurred while creating the book. Please try again later.",
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
      <BackButton className="md:hidden absolute top-0 left-0" />
      <div className="p-4">
        <BookForm
          bookData={bookData}
          setBookData={setBookData}
          errors={errors}
          handleInputChange={handleInputChange}
          handleSubmit={handleCreateBook}
        />
      </div>
    </>
  );
};

export default CreateBook;
