const express = require('express');
const router = express.Router();
const Book = require('../book');
const { format } = require('date-fns');
const curd = new Date();
const today = format(curd, 'yyyy-MM-dd');
router.get('/', (req, res) => {
    res.send("Welcome to book store");
});
router.post('/books', async (req, res) => {
    try {
        console.log("debug :", req.body);
        const newbook = new Book({
            book_name: req.body.bookname,
            author: req.body.author,
            price: req.body.price,
            publish_date: today
        });
        const savedBook = await newbook.save();
        res.json(savedBook);
    } catch (err) {
        console.error(err);
    }
});
module.exports = router;
router.get('/viewbooks', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});