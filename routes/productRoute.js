const express = require('express');
const router = express.Router();

const { getAllProducts, addProduct,getProductsById,updateProductsById } = require('../controllers/productController');

router.get('/getAllProducts', getAllProducts);
router.get('/getProductsById/:id', getProductsById)
router.post('/addProduct', addProduct)
router.put('/updateProductsById/:id', updateProductsById)

module.exports = router