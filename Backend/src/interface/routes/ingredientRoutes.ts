import { Router } from "express";
import { IngredientController } from "../controllers/IngredientController";
import { diContainer } from "../../infrastructure/DIContainerIngredient";

const router = Router();

const ingredientController = new IngredientController(diContainer.getFindAllIngredients());

router.get("/ingredients", (req, res) => ingredientController.getAll(req, res));

export { router as ingredientRoutes }