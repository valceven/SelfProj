import { Recipe } from "../../domain/entities/Recipe";
import { IRecipeRepository } from "../../domain/interfaces/IRecipeRepository";

export class RecipeRepository implements IRecipeRepository {

    private recipes: Recipe[] = []

    async findAll(): Promise<Recipe[]> {
        return this.recipes;
    }

    async findById(id: number): Promise<Recipe | null> {
        return this.recipes.find(recipe => recipe.recipeId === id) || null;
    }

    async create(recipe: Recipe): Promise<Recipe> {
       this.recipes.push(recipe);
       return recipe;
    }

    async update(recipe: Recipe): Promise<void> {
        const index = this.recipes.findIndex(r => r.recipeId === recipe.recipeId);
        if (index !== -1) {
            this.recipes[index] = recipe;
        }
    }

    async delete(id: number): Promise<void> {
        this.recipes = this.recipes.filter(recipe => recipe.recipeId !== id);
    }
    
}