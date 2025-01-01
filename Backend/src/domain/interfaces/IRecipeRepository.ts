import { Recipe } from "../entities/Recipe";

export interface IRecipeRepository {
    findAll(): Promise<Recipe[]>;
    findById(id: number): Promise<Recipe | null>;
    create(recipe: Recipe): Promise<Recipe>;
    update(recipe: Recipe): Promise<void>;
    delete(id: number): Promise<void>;
}