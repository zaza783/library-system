const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A book must have a title'],
    },
    author: {
        type: String,
        required: [true, 'A book must have a author'],
    },
    publishedYear: {
        type: Number,
        required: [true, 'A book must have a published year']
    },
    genre: {
        type: String,
        required: [true, 'A boook must have a Genre']
    },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;