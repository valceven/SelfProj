import { Ingredient } from "../entities/Ingredient";

export interface IIngredientRepository {
    findAll(): Promise<Ingredient[]>;
    findById(id: number): Promise<Ingredient | null>;
    create(ingredient: Ingredient): Promise<Ingredient>;
    update(ingredient: Ingredient): Promise<void>;
    delete(id: number): Promise<void>;
}