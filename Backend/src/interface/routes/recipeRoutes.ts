import { Router } from "express";
import { diContainer } from "../../infrastructure/DIContainerRecipe";
import { RecipeController } from "../controllers/RecipeController";
import { authenticateJWT } from "../middleware/auth";

// Create the router
const router = Router();

// Instantiate the controller with the injected use case
const recipeController = new RecipeController(diContainer.getFindAllRecipesUseCase());

// Define the routes
router.get("/recipes", authenticateJWT, (req, res) => recipeController.getAll(req, res));

export { router as recipeRoutes };
