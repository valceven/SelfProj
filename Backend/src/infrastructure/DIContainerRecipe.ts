import { RecipeRepository } from "./repositories/RecipeRepository";
import { FindAllRecipes } from "../application/Recipe/findAllRecipe";
import { FindRecipeById } from "../application/Recipe/findRecipeById";
import { CreateRecipe } from "../application/Recipe/createRecipe";
import { DeleteRecipe } from "../application/Recipe/deleteRecipe";
import { UpdateRecipe } from "../application/Recipe/updateRecipe";

export default class DIContainer {
    private static _recipeRepository: RecipeRepository = new RecipeRepository();
    private static _findAllRecipesUseCase = new FindAllRecipes(this._recipeRepository);
    private static _findRecipeByIdUseCase = new FindRecipeById(this._recipeRepository);
    private static _createRecipeUseCase = new CreateRecipe(this._recipeRepository);
    private static _deleteRecipeUseCase = new DeleteRecipe(this._recipeRepository);
    private static _updateRecipeUseCase = new UpdateRecipe(this._recipeRepository);

    static getRecipeRepository(): RecipeRepository {
        return this._recipeRepository;
    }

    static getFindAllRecipesUseCase(): FindAllRecipes {
        return this._findAllRecipesUseCase;
    }

    static getFindRecipeByIdUseCase(): FindRecipeById {
        return this._findRecipeByIdUseCase;
    }

    static createRecipeUseCase(): CreateRecipe {
        return this._createRecipeUseCase;
    }

    static deleteRecipeUseCase(): DeleteRecipe {
        return this._deleteRecipeUseCase;
    }

    static updateRecipeUseCase(): UpdateRecipe {
        return this._updateRecipeUseCase;
    }
}
