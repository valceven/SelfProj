import { Ingredient } from "../entities/Ingredient";
import { CreateIngredientDto } from "../../interface/dto/Ingredient/CreateIngredientDto";
import { UpdateIngredientDto } from "../../interface/dto/Ingredient/UpdateIngredientDto";

export interface IIngredientRepository {
    findAll(): Promise<Ingredient[]>;
    findById(id: number): Promise<Ingredient | null>;
    create(ingredientDto: CreateIngredientDto): Promise<Ingredient>;
    update(id: number, ingredientDto: UpdateIngredientDto): Promise<void>;
    delete(id: number): Promise<void>;
}