import { Router } from 'express'
import {
  readProducts,
  readProduct,
  createProducts,
  deleteProduct,
  updateProduct
} from '../controllers/products.controllers.js'

const router = Router()

router.get('/products', readProducts)

router.get('/products/:code', readProduct)

router.post('/products', createProducts)

router.delete('/products/:id', deleteProduct)

router.put('/products/:id', updateProduct)

export default router
