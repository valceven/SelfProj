import { ISuggestionRepository } from "../../domain/interfaces/ISuggestionRepository";

export class FindAllSuggestions {
    constructor(private suggestionRepository: ISuggestionRepository) {}

    async execute() {
        return await this.suggestionRepository.findAll();
    }
}