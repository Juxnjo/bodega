import { Router } from "express";
import {
  createWarehouses,
  readWarehouse,
  readWarehouses,
} from "../controllers/warehouses.controllers.js";

const router = Router();

router.get("/warehouses", readWarehouses);
router.get("/warehouses/:code", readWarehouse);
router.post("/warehouses", createWarehouses);

export default router;
