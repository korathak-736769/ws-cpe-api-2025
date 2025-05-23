
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

exports.addProduct = async (req, res) => {
    const newProduct = req.body
    res.status(201).json({ message: 'Product added successfully', product: newProduct })
}