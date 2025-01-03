import { Router } from "express";
import DiContainer from "../../infrastructure/DIContainerRecipe";
import { RecipeController } from "../controllers/RecipeController";
import { authenticateJWT } from "../middleware/auth";

const router = Router();

const findAllRecipesUseCase = DiContainer.getFindAllRecipesUseCase();

const recipeController = new RecipeController(findAllRecipesUseCase);

router.get("/recipes", (req, res) => recipeController.getAll(req, res));

export { router as recipeRoutes };
