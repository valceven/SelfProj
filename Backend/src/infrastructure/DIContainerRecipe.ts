import { RecipeRepository } from "./repositories/RecipeRepository";
import { FindAllRecipes } from "../application/Recipe/findAllRecipe";

class DIContainer {
    private recipeRepository: RecipeRepository;
    private findAllRecipes: FindAllRecipes;

    constructor() {
        this.recipeRepository = new RecipeRepository();
        this.findAllRecipes = new FindAllRecipes(this.recipeRepository);
    }

    getRecipeRepository() {
        return this.recipeRepository;
    }

    getFindAllRecipesUseCase() {
        return this.findAllRecipes;
    }
}

const diContainer = new DIContainer();
export { diContainer }

