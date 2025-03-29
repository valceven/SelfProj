import supabase from "../database/supabaseClient";
import { Sales } from "../../domain/entities/Sales";
import { IRecipeRepository } from "../../domain/interfaces/IRecipeRepository";
import { Recipe } from "../../domain/entities/Recipe";
import { CreateRecipeDto } from "../../interface/dto/Recipe/CreateRecipeDto";
import { UpdateRecipeDto } from "../../interface/dto/Recipe/UpdateRecipeDto";

export class SalesRepository implements IRecipeRepository {
    findAll(): Promise<Recipe[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<Recipe | null> {
        throw new Error("Method not implemented.");
    }
    create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
        throw new Error("Method not implemented.");
    }
    update(id: number, updateRecipeDto: UpdateRecipeDto): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}