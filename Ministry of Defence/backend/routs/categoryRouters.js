const express = require('express');
const router = express.Router();
const {getCategories} = require('../controller/categoryController.js');

router.get('/categories', getCategories);

module.exports = router;
