import { Router } from "express";
import { RecipeRepository } from "../../infrastructure/repositories/RecipeRepository";
import { FindAllRecipes } from "../../application/Recipe/findAllRecipe";
import { RecipeController } from "../controllers/RecipeController";

const router = Router();

const recipeRepository = new RecipeRepository();
const findAllRecipes = new FindAllRecipes(recipeRepository);
const recipeController = new RecipeController(findAllRecipes);

router.get("/recipes", (req, res) => recipeController.getAll(req, res));

export { router as recipeRoutes };