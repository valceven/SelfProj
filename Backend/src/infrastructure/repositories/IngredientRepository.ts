import supabase from "../database/supabaseClient";
import { Ingredient } from "../../domain/entities/Ingredient";
import { IIngredientRepository } from "../../domain/interfaces/IIngredientRepository";

export class IngredientRepository implements IIngredientRepository{
    
    async findAll(): Promise<Ingredient[]> {
        try {
            const { data, error } = await supabase
                .from('Ingredients')
                .select('*')
            
            if (error) {
                throw new Error(`Failed to fetch ingredients: ${error.message}`);
            }

            return data as Ingredient[]
        } catch (err) {
            console.error(err);
            throw new Error("An unexpected error occured while fetching ingredients.");
        }
    }

    async findById(id: number): Promise<Ingredient | null> {
        try {
            const { data, error } = await supabase
                .from('Ingredients')
                .select('*')
                .eq("ingredient_id", id)
                .single()

            if (error) {
                throw new Error(`Failed to fetch ingredient by ID: ${error.message}`);
            }

            return data as Ingredient;
        } catch (err) {
            console.error(err);
            throw new Error("An unexpected error occured while fetching Ingredient by Id");
        }
    }

    async create(ingredient: Ingredient): Promise<Ingredient> {
        try {
            const { data, error } = await supabase
                .from('Ingredients')
                .insert(ingredient)
                .select('*');
            
            if (error) {
                throw new Error(`Failed to insert ingredient: ${error.message}`);
            }

            if (!data) {
                throw new Error('No data returned from the database.');
            }

            return data[0] as Ingredient;
        } catch (err) {
            console.error(err);
            throw new Error("An unexpected error occured while creating ingredient");
        }
    }

    async update(id: number, ingredient: Ingredient): Promise<void> {
        try {
            const { data, error } = await supabase
                .from('ingredients')
                .update(ingredient)
                .eq('ingredient_id', ingredient.ingredientId);

            if (error) {
                throw new Error(`Failed to update ingredient: ${error.message}`);
            }
        } catch (err) {
            console.error(err);
            throw new Error("An unexpected error occured while updating ingredient");
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const { data, error } = await supabase
                .from('Ingredients')
                .delete()
                .eq('ingredient_id', id);
            
            if (error) {
                throw new Error(`Failed to delete ingredient: ${error.message}`);
            }
        } catch (err) {
            console.error(err);
            throw new Error("An unexpected error occured while deleting ingredient");
        }
    }
}