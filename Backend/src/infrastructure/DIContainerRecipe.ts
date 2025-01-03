import { RecipeRepository } from "./repositories/RecipeRepository";
import { FindAllRecipes } from "../application/Recipe/findAllRecipe";

export default class DIContainer {
    private static _recipeRepository = new RecipeRepository();
    private static _findAllRecipesUseCase = new FindAllRecipes(this._recipeRepository);

    static getRecipeRepository() {
        return this._recipeRepository;
    }

    static getFindAllRecipesUseCase() {
        return this._findAllRecipesUseCase;
    }
}

