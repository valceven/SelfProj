import { Router } from "express";
import { IngredientController } from "../controllers/IngredientController";
import DiContainer from "../../infrastructure/DIContainerIngredient";

const router = Router();

const ingredientController = new IngredientController(DiContainer.getFindAllIngredients());

router.get("/ingredients", (req, res) => ingredientController.getAll(req, res));

export { router as ingredientRoutes }