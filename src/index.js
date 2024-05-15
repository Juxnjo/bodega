import express from 'express'
import morgan from 'morgan'
import { PORT } from './config.js'
import productRoutes from './routes/products.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(productRoutes)

app.listen(PORT)
console.log('Server on port', PORT)
