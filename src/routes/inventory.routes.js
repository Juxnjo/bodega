import { Router } from 'express'
import { readInventory } from '../controllers/inventory.controllers.js'

const router = Router()

router.get("/inventory", readInventory)

export default router
