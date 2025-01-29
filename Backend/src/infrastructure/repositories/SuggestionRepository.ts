import supabase from "../database/supabaseClient";
import { Suggestion } from "../../domain/entities/Suggestion";
import { ISuggestionRepository } from "../../domain/interfaces/ISuggestionRepository";

export class SuggestionRepository implements ISuggestionRepository {

    async findAll(): Promise<Suggestion[]> {
        try {
            const { data, error } = await supabase
                .from("Suggestions")
                .select('*');

            if (error) {
                throw new Error(`Failed to fetch Suggestions: ${error.message}`);
            }

            return data as Suggestion[];
        } catch (err) {
            console.error(err);
            throw new Error("An unexpected error occured while fetching Suggestions");
        }
    }

    async create(suggestion: Suggestion): Promise<Suggestion> {
        
        try {
            const { data, error } = await supabase
                .from('Suggestions')
                .insert(suggestion)
                .select('*');
            
            if (error) {
                throw new Error(`Failed to insert suggestion: ${error.message}`);
            }

            if (!data) {
                throw new Error("No data returned from database");
            }

            return data[0] as Suggestion;
        } catch (err) {
            console.error(err);
            throw new Error("An unexpected error occured while creating suggestion");
        }
    }
    
};