import { Router } from "express";
import { readWarehouses } from "../controllers/warehouses.controllers.js";

const router = Router()

router.get('/warehouses', readWarehouses)

export default router