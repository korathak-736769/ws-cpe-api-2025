const express = require('express');
const router = express.Router();

const { getAllProducts, addProduct } = require('../controllers/productController');

router.get('/getAllProducts', getAllProducts);
router.post('/addProduct', addProduct)

module.exports = router