import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'

dotenv.config()

const app = express()
connectDB()
const PORT = process.env.PORT

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
    console.log(`sever running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})