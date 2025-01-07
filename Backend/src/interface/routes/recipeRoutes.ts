import { Router } from "express";
import DiContainer from "../../infrastructure/DIContainerRecipe";
import { RecipeController } from "../controllers/RecipeController";
import { authenticateJWT } from "../middleware/auth";

const router = Router();

const findAllRecipesUseCase = DiContainer.getFindAllRecipesUseCase();
const findRecipeByIdUseCase = DiContainer.getFindRecipeByIdUseCase();
const createRecipeUseCase = DiContainer.createRecipeUseCase();
const deleteRecipeUseCase = DiContainer.deleteRecipeUseCase();

const recipeController = new RecipeController(
    findAllRecipesUseCase,
    findRecipeByIdUseCase,
    createRecipeUseCase,
    deleteRecipeUseCase
);

router.get("/recipes", (req, res) => recipeController.getAll(req, res));
router.get("/recipes/:id", (req, res) => recipeController.getById(req, res));
router.post("/recipes", (req, res) => recipeController.createRecipe(req, res));
router.delete("/recipes/:id", (req, res) => recipeController.deleteRecipe(req, res));

export { router as recipeRoutes };
