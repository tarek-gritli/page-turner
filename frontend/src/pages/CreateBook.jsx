import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import { handleInputChange, validateInputs } from "../utils/helpers";
import BookForm from "../components/BookForm";
import AtomicSpinner from "atomic-spinner"

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
      navigate("/books");
    } catch (err) {
      console.log(err);
      setLoading(false);
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
