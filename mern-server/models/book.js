const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    book_name: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    publish_date: { type: Date, required: true },
    status: { type: String, enum: ['available', 'unavailable'], default: 'available' }
});
module.exports = mongoose.model('Book', bookSchema);