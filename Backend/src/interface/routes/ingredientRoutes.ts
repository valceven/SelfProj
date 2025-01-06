import { Router } from "express";
import { IngredientController } from "../controllers/IngredientController";
import DiContainer from "../../infrastructure/DIContainerIngredient";

const router = Router();

const ingredientController = new IngredientController(
    DiContainer.getFindAllIngredients(),
    DiContainer.getFindIngredintById()
);

router.get("/ingredients", (req, res) => ingredientController.getAll(req, res));
router.get("/ingredients/:id", (req, res) => ingredientController.getById(req, res));

export { router as ingredientRoutes }