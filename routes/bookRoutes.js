const express = require('express');
const bookController = require('../controller/bookController');
const router = express.Router();

router.route('/create-book').post(bookController.createBook);
router.route('/getAllBook').get(bookController.getAllBook);


router.route('/updateBook/:id').patch(bookController.updateBook);
router.route('/deleteBook/:id').delete(bookController.deleteBook);

module.exports = router;