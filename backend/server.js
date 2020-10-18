const { request } = require("http")
const products = require('./data/products')

const express = require('express')

const app = express()
const PORT = 5000

// Get route
app.get('/', (req, res) => {
    res.send('Api is runing...')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, () => {
    console.log(`sever running on port ${PORT}`);
})