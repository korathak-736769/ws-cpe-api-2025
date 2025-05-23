const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const productRoute = require('./routes/productRoute')

app.use(express.json()).use(morgan('dev'))

app.use(productRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})