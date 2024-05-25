import express from 'express'
import morgan from 'morgan'
import { PORT } from './config.js'

import productRoutes from './routes/products.routes.js'
import warehouseRoutes from "./routes/warehouses.routes.js";
import inventoryRoutes from "./routes/inventory.routes.js";

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api', productRoutes)
app.use('/api', warehouseRoutes)
app.use('/api', inventoryRoutes)

app.listen(PORT)
console.log('Server on port', PORT)
