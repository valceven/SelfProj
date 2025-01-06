import supabase from "../database/supabaseClient";
import { Recipe } from "../../domain/entities/Recipe";
import { IRecipeRepository } from "../../domain/interfaces/IRecipeRepository";

export class RecipeRepository implements IRecipeRepository {

    async findAll(): Promise<Recipe[]> {
        try {
            const { data, error } = await supabase
                .from('Recipe')
                .select('*');

            if (error) {
                throw new Error(`Failed to fetch recipes: ${error?.message}`)
            }

            return data as Recipe[];
        } catch (err) {
            console.error(err);
            throw new Error('An Error occured Fetching All Recipes.');
        }
    }


    async findById(id: number): Promise<Recipe | null> {
        try {
            const { data, error } = await supabase
                .from('Recipe')
                .select('*')
                .eq('recipe_id', id)
                .single();

            if (error) {
                if (error.message.includes('No rows found')) return null;
                throw new Error(`Failed to fetch recipe by ID: ${error?.message}`);
            }

            return data as Recipe;
            
        } catch (err) {
            console.error(err);
            throw new Error(`An unexpected error occurred while fetching the recipe with ID ${id}.`);
        }
    }

    async create(recipe: Recipe): Promise<Recipe> {
        try {
            const { data, error } = await supabase
                .from('recipes')
                .insert([recipe]);
    
            if (error) {
                throw new Error(`Failed to create recipe: ${error.message}`);
            }
    
            if (!data) {
                throw new Error('No data returned from the database.');
            }
    
            return data[0] as Recipe;
        } catch (err) {
            console.error(err);
            throw new Error('An unexpected error occurred while creating the recipe.');
        }
    }
    
    async update(recipe: Recipe): Promise<void> {
        try {
            const { error } = await supabase
                .from('recipes')
                .update(recipe)
                .eq('recipeId', recipe.recipeId);

                if (error) {
                    throw new Error(`Failed to update recipe: ${error.message}`);
                }
        } catch (err) {
            console.error(err);
            throw new Error("An unexpected error occured while updating the recipe.");
        }
        
    }

    async delete(id: number): Promise<void> {
        try {
            const { error } = await supabase
                .from('recipes')
                .delete()
                .eq('recipeId', id);

            if (error) {
                throw new Error(`Failed to delete recipe: ${error.message}`);
            }
        } catch (err) {
            console.error(err);
            throw new Error("An unexpected error occured while deleting the recipe.");
        }
    }
    
}