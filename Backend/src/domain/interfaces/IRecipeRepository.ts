import { Recipe } from "../entities/Recipe";
import { CreateRecipeDto } from "../../interface/dto/Recipe/CreateRecipeDto";
import { UpdateRecipeDto } from "../../interface/dto/Recipe/UpdateRecipeDto";

export interface IRecipeRepository {
    findAll(): Promise<Recipe[]>;
    findById(id: number): Promise<Recipe | null>;
    create(createRecipeDto: CreateRecipeDto): Promise<Recipe>;
    update(id: number, updateRecipeDto: UpdateRecipeDto): Promise<void>;
    delete(id: number): Promise<void>;
}