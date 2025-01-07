import { Recipe } from "../entities/Recipe";
import { CreateRecipeDto } from "../../interface/dto/Recipe/CreateRecipeDto";

export interface IRecipeRepository {
    findAll(): Promise<Recipe[]>;
    findById(id: number): Promise<Recipe | null>;
    create(recipeDto: CreateRecipeDto): Promise<Recipe>;
    update(recipe: Recipe): Promise<void>;
    delete(id: number): Promise<void>;
}