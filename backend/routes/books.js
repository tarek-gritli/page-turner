import { Router } from "express";
import { checkSchema } from "express-validator";
import { createBookValidationSchema } from "../utils/validationSchemas.js";
import {
  getBooks,
  getBookById,
  addBook,
  updateBookById,
  deleteBookById,
} from "../controllers/books.js";

const router = Router();

router.get("/", getBooks);

router.get("/:id", getBookById);

router.post("/", checkSchema(createBookValidationSchema), addBook);

router.put(
  "/:id",
  checkSchema(createBookValidationSchema),
  updateBookById
);

router.delete("/:id", deleteBookById);

export default router;
