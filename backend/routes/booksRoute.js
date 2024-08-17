import express from "express";
const router = express.Router();

import {
    createBook,
    getAllBooks,
    getById,
   updateOne ,
    deleteOne
} from "../controllers/booksController.js";

// Route for saving book to database
router.post("/",  createBook);
// Route for Get All Books from database
router.get("/", getAllBooks);
// Route for get one book
router.get("/:id", getById);
// Route for Update a Book
router.put("/:id", updateOne);
// Route for delete a book
router.delete("/:id", deleteOne);

export default router;