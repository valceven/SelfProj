import { Router } from "express";
import DiContainer from "../../infrastructure/DIContainerRecipe";
import { RecipeController } from "../controllers/RecipeController";
import { authenticateJWT } from "../middleware/auth";

const router = Router();

const findAllRecipesUseCase = DiContainer.getFindAllRecipesUseCase();
const findRecipeByIdUseCase = DiContainer.getFindRecipeByIdUseCase();

const recipeController = new RecipeController(
    findAllRecipesUseCase,
    findRecipeByIdUseCase
);

router.get("/recipes", (req, res) => recipeController.getAll(req, res));
router.get("/recipes/:id", (req, res) => recipeController.getById(req, res));

export { router as recipeRoutes };
