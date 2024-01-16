const express = require('express');
const router = express.Router();
const {getCategories} = require('../controller/categoryController.js');

// Route to get a list of categories
router.get('/categories', getCategories);

module.exports = router;
