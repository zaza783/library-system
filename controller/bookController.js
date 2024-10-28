const Book = require('../models/bookModels');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appErrors')

exports.getAllBook = catchAsync(async (req, res) => {
    const books = await Book.find().sort('title');
    res.send(books);
});


exports.createBook = catchAsync(async (req, res, next) => {
    const newBook = await Book.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            book: newBook
        }
    });
});

exports.updateBook = catchAsync(async (req, res, next) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!book) {
        return next(new AppError('No book found with that ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            book
        }
    });
});

exports.deleteBook = async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) return res.status(404).send('The book with the given ID not found.');

    res.send(book);
};