import { Ingredient } from "../entities/Ingredient";
import { CreateIngredientDto } from "../../interface/dto/Ingredient/CreateIngredientDto";

export interface IIngredientRepository {
    findAll(): Promise<Ingredient[]>;
    findById(id: number): Promise<Ingredient | null>;
    create(ingredientDto: CreateIngredientDto): Promise<Ingredient>;
    update(ingredient: Ingredient): Promise<void>;
    delete(id: number): Promise<void>;
}