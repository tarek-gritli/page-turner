import express from "express";
import cors from "cors";
import connectDatabase from "./config/database.js";
import bookRoutes from "./routes/books.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/books",bookRoutes)



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
