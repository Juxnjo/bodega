import { Router } from "express";
import { readWarehouse, readWarehouses } from "../controllers/warehouses.controllers.js";

const router = Router()

router.get('/warehouses', readWarehouses)
router.get('/warehouses/:id', readWarehouse)

export default router