import { Request, Response } from "express";
import { CreateSuggestion } from "../../application/Suggestion/createSuggestion";
import { CreateSuggestionDto } from "../dto/Suggestion/CreateSuggestionDto";
import { FindAllSuggestions } from "../../application/Suggestion/findAllSuggestion";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

export class SuggestionController {

    constructor(
        private readonly createSuggestionUseCase: CreateSuggestion,
        private readonly findAllSuggestionsUseCase: FindAllSuggestions
    ) {}

    async findAllSuggestions(req: Request, res: Response): Promise<void> {
        try {
            const suggestions = await this.findAllSuggestionsUseCase.execute();
            res.json(suggestions);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async createSuggestion(req: Request, res: Response): Promise<any> {
        try {
            const createSuggestionDto = plainToInstance(CreateSuggestionDto, req.body);
            const errors = await validate(createSuggestionDto);

            if (errors.length > 0) {
                return res.status(400).json({ message: "Data Validation Failed", createSuggestionDto});
            }

            const suggestion = await this.createSuggestionUseCase.execute(createSuggestionDto);
            return res.status(201).json(suggestion);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}