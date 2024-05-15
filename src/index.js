import express from "express";
import { PORT } from "./config.js";
import productRoutes from "./routes/products.routes.js";

const app = express()

app.use(express.json())
app.use(productRoutes)

app.listen(PORT)
console.log("Server on port", PORT)