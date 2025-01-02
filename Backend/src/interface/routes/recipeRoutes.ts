import { Router } from "express";
import { diContainer } from "../../infrastructure/DIContainer";
import { RecipeController } from "../controllers/RecipeController";

const router = Router();

const recipeController = new RecipeController(diContainer.getFindAllRecipesUseCase());

router.get("/recipes", (req, res) => recipeController.getAll(req, res));

export { router as recipeRoutes };