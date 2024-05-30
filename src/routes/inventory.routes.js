import { Router } from 'express'
import { readInventory, readInventoryByProduct } from '../controllers/inventory.controllers.js'

const router = Router()

router.get("/inventory", readInventory)
router.get("/inventory/product/:product_code", readInventoryByProduct)

export default router
