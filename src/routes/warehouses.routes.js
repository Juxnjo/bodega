import { Router } from "express";
import {
  createWarehouses,
  deleteWarehouse,
  readWarehouse,
  readWarehouses,
  updateWarehouse,
} from "../controllers/warehouses.controllers.js";

const router = Router();

router.get("/warehouses", readWarehouses);

router.get("/warehouses/:code", readWarehouse);

router.post("/warehouses", createWarehouses);

router.delete("/warehouses/:code", deleteWarehouse)

router.put("/warehouses/:code", updateWarehouse)

export default router;
