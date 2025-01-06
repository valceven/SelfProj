import { RecipeRepository } from "./repositories/RecipeRepository";
import { IRecipeRepository } from "../domain/interfaces/IRecipeRepository";
import { FindAllRecipes } from "../application/Recipe/findAllRecipe";
import { FindRecipeById } from "../application/Recipe/findRecipeById";

export default class DIContainer {
    private static _recipeRepository: IRecipeRepository = new RecipeRepository();
    private static _findAllRecipesUseCase = new FindAllRecipes(this._recipeRepository);
    private static _findRecipeByIdUseCase = new FindRecipeById(this._recipeRepository);

    static getRecipeRepository(): IRecipeRepository {
        return this._recipeRepository;
    }

    static getFindAllRecipesUseCase(): FindAllRecipes {
        return this._findAllRecipesUseCase;
    }

    static getFindRecipeByIdUseCase(): FindRecipeById {
        return this._findRecipeByIdUseCase;
    }
}
