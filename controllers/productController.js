const ProductModel = require('../models/productModel')

exports.addProduct = async (req, res) => {
    try {
        const { product_name, product_price } = req.body
        if(!product_name || !product_price){
            return res.status(400).json({ message: 'Please provide all required fields [product_name, product_price]' })
        }
        const newProduct = new ProductModel({ product_name, product_price })
        await newProduct.save()
        res.status(201).json({ message: 'Product added successfully', product: newProduct })
    } catch (error) {
        console.error('Error adding product:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

exports.getAllProducts = async (req, res) => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 100 },
        { id: 3, name: 'Product 3', price: 100 },
        { id: 4, name: 'Product 4', price: 100 },
        { id: 5, name: 'Product 5', price: 100 },
    ]
    res.json(products)
}

