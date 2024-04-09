import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "No description provided"
    },
    price: {
      type: Number,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true
    },
    imageUrl: {
      type: String,
      default: "https://bookstore.usip.org/publishers/default_cover.png"
    },
    genre: {
      type: String,
      default: "No genre specified"
    }
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema)

export default Book;
