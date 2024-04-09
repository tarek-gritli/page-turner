import Book from "../models/bookModel.js";
import { isValidObjectId } from "mongoose";
import { validationResult, matchedData } from "express-validator";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    if (!books) {
      return res.status(404).send({
        msg: "No books found",
      });
    }
    res.status(200).send(books);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      msg: "Error fetching books from database",
    });
  }
};

export const getBookById = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).send({
      msg: "Invalid ID",
    });
  }
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send({
        msg: "Book not Found!",
      });
    }
    return res.status(200).send(book);
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      msg: "Error fetching book from database",
    });
  }
};

export const addBook = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send(result.array());
  }
  const data = matchedData(req);
  try {
    const newBook = new Book(data);
    const newSavedBook = await newBook.save();
    return res.status(201).send(newSavedBook);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      msg: "Error saving book to database",
    });
  }
};

export const updateBookById = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).send({
      msg: "Invalid ID",
    });
  }
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send(result.array());
  }
  const data = matchedData(req);
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, data);
    if (!updatedBook) {
      return res.status(404).send({
        msg: "Couldn't find book",
      });
    }
    return res.status(200).send("Updated Book successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      msg: "Couldn't update book",
    });
  }
};

export const deleteBookById = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).send({
      msg: "Invalid ID",
    });
  }
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).send({
        msg: "Book not found",
      });
    }
    return res.status(200).send("Book deleted successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      msg: "Error deleting book from database",
    });
  }
};
