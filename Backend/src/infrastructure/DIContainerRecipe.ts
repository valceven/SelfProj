import { RecipeRepository } from "./repositories/RecipeRepository";
import { IRecipeRepository } from "../domain/interfaces/IRecipeRepository";
import { FindAllRecipes } from "../application/Recipe/findAllRecipe";

export default class DIContainer {
    private static _recipeRepository: IRecipeRepository = new RecipeRepository();
    private static _findAllRecipesUseCase = new FindAllRecipes(this._recipeRepository);

    static getRecipeRepository(): IRecipeRepository {
        return this._recipeRepository;
    }

    static getFindAllRecipesUseCase(): FindAllRecipes {
        return this._findAllRecipesUseCase;
    }
}
