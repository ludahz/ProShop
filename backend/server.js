import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

const app = express()

connectDB()

const PORT = process.env.PORT


// Get route
app.get('/', (req, res) => {
    res.send('Api is runing...')
})

app.use('/api/products', productRoutes)

app.use(notFound)

//middleware to handle error in json formart
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`sever running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
})