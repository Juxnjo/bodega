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

router.delete('/products/:code', deleteProduct)

router.put('/products/:code', updateProduct)

export default router
