import { Ingredient } from "../../domain/entities/Ingredient";
import { IIngredientRepository } from "../../domain/interfaces/IIngredientRepository";

export class IngredientRepository implements IIngredientRepository{
    
    private ingredients: Ingredient[] = []

    async findAll(): Promise<Ingredient[]> {
        return this.ingredients;
    }

    async findById(id: number): Promise<Ingredient | null> {
        return this.ingredients.find(ingredient => ingredient.ingredientId === id) || null;
    }

    async create(ingredient: Ingredient): Promise<Ingredient> {
        this.ingredients.push(ingredient);
        return ingredient;
    }

    async update(ingredient: Ingredient): Promise<void> {
        const index = this.ingredients.findIndex(i => i.ingredientId === ingredient.ingredientId);
        if (index !== -1) {
            this.ingredients[index] = ingredient;
        }
    }

    async delete(id: number): Promise<void> {
        this.ingredients = this.ingredients.filter(ingredient => ingredient.ingredientId !== id);
    }

}