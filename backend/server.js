import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

const app = express()

connectDB()

app.use(express.json())

const PORT = process.env.PORT || 5000

// Get route
app.get('/', (req, res) => {
  res.send('Api is runing...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname)))

app.use(notFound)

//middleware to handle error in json formart
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(
    `sever running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
})
