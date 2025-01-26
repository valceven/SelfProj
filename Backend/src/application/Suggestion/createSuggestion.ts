import { ISuggestionRepository } from "../../domain/interfaces/ISuggestionRepository";
import { CreateSuggestionDto } from "../../interface/dto/Suggestion/CreateSuggestionDto";

export class CreateSuggestion {
    constructor(private suggestionRepository: ISuggestionRepository) {}

    async execute(createSuggestionDto: CreateSuggestionDto) {
        
        const { firstName, lastName, email, phone, message} = createSuggestionDto;

        return await this.suggestionRepository.create({ firstName, lastName, email, phone, message });
    }
}