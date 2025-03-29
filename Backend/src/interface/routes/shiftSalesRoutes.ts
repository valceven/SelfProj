import { Router } from "express";
import { ShiftSalesController } from "../controllers/ShiftSalesController";

const router = Router();
const shiftSalesController = new ShiftSalesController();

router.get("/shift_sales", (req, res) => shiftSalesController.getAll(req, res));
router.get("/shift_sales/:id", (req, res) => shiftSalesController.getById(req, res));
router.post("/shift_sales", (req, res) => shiftSalesController.createShiftSales(req, res));
router.put("/shift_sales/:id", (req, res) => shiftSalesController.updateShiftSales(req, res));
router.delete("/shift_sales/:id", (req, res) => shiftSalesController.deleteShiftSales(req, res));

export { router as shiftSalesRoutes }