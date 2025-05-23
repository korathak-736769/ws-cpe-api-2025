const express = require('express');
const router = express.Router();

const { getAllProducts, addProduct,getProductsById } = require('../controllers/productController');

router.get('/getAllProducts', getAllProducts);
router.get('/getProductsById/:id', getProductsById)
router.post('/addProduct', addProduct)

module.exports = router