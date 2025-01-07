import { Router } from "express";
import { IngredientController } from "../controllers/IngredientController";
import DiContainer from "../../infrastructure/DIContainerIngredient";

const router = Router();

const ingredientController = new IngredientController(
    DiContainer.getFindAllIngredients(),
    DiContainer.getFindIngredintById(),
    DiContainer.createIngredient(),
    DiContainer.deleteIngredient()
);

router.get("/ingredients", (req, res) => ingredientController.getAll(req, res));
router.get("/ingredients/:id", (req, res) => ingredientController.getById(req, res));
router.post("/ingredients", (req, res) => ingredientController.createIngredient(req, res));
router.delete("/ingredients/:id", (req, res) => ingredientController.deleteIngredient(req, res));

export { router as ingredientRoutes }