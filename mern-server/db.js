const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookstore');
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});
module.exports = mongoose;