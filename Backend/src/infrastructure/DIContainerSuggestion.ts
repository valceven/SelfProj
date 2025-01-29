import { CreateSuggestion } from "../application/Suggestion/createSuggestion";
import { SuggestionRepository } from "./repositories/SuggestionRepository";
import { FindAllSuggestions } from "../application/Suggestion/findAllSuggestion";

export default class DIContainer {
    private static _suggestionRepository = new SuggestionRepository();
    private static _createSuggestion = new CreateSuggestion(this._suggestionRepository);
    private static _findAllSuggestions = new FindAllSuggestions(this._suggestionRepository);

    static getSuggestionRepository(): SuggestionRepository {
        return this._suggestionRepository;
    }

    static createIngredient(): CreateSuggestion {
        return this._createSuggestion;
    }

    static findAllSuggestions(): FindAllSuggestions {
        return this._findAllSuggestions;
    }

}