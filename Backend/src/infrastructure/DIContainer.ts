import { RecipeRepository } from "./repositories/RecipeRepository";
import { FindAllRecipes } from "../application/Recipe/findAllRecipe";

class DIContainer {
    private static _recipeRepository = new RecipeRepository();

    static getRecipeRepository() {
        return this._recipeRepository;
    }

    static getFindAllRecipesUseCase() {
        return new FindAllRecipes(this.getRecipeRepository());
    }
}

export { DIContainer }

