const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Korathank PSRU!')
})

app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 100 },
        { id: 3, name: 'Product 3', price: 100 },
    ]
    res.json(products)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
