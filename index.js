const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Korathank PSRU!')
})

app.get('/product/:name/:price', (req, res) => {
    const name = req.params.name
    const price = req.params.price
    res.send('Hello Product ' + name + ' ,Price ' + price)
})
app.get('/product/', (req, res) => {
    // console.log(req.query);
    const { name, price, detail } = req.query

    res.send('Hello Product : ' + name + ',Price : ' + price + ' ,detial : ' + detail)
})

app.get('/product/computer', (req, res) => {
    res.send('Hello product computer!')
})

app.get('/product/json', (req, res) => {
    res.status(401).json({
        name: 'computer',
        price: 10000,
        brand: 'ASUS'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
