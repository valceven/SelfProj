import { Router } from "express";
import { SalesController } from "../controllers/SalesController";

const router = Router();
const salesController = new SalesController();

router.get("/sales", (req, res) => salesController.getAll(req, res));
router.get("/sales/:id", (req, res) => salesController.getById(req, res));
router.post("/sales", (req, res) => salesController.createSales(req, res));
router.put("/sales/:id", (req, res) => salesController.updateSales(req, res));
router.delete("/sales/:id", (req, res) => salesController.deleteSales(req, res));

export { router as salesRoutes }