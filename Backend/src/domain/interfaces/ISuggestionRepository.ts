import { Suggestion } from "../entities/Suggestion";
import { CreateSuggestionDto } from "../../interface/dto/Suggestion/CreateSuggestionDto";

export interface ISuggestionRepository {
    findAll(): Promise<Suggestion[]>;
    create(suggestionDto: CreateSuggestionDto): Promise<Suggestion>;
}