import { FindAllIngredients } from "../application/Ingredient/findAllIngredients";
import { IngredientRepository } from "./repositories/IngredientRepository";
import { FindIngredientById } from "../application/Ingredient/findIngredientById";
import { CreateIngredient } from "../application/Ingredient/createIngredient";
import { DeleteIngredient } from "../application/Ingredient/deleteIngredient";
import { UpdateIngredient } from "../application/Ingredient/updateIngredient";

export default class DIContainer {
    private static _ingredientsRepository = new IngredientRepository();
    private static _findAllIngredients = new FindAllIngredients(this._ingredientsRepository);
    private static _findIngredientById = new FindIngredientById(this._ingredientsRepository);
    private static _createIngredient = new CreateIngredient(this._ingredientsRepository);
    private static _deleteIngredient = new DeleteIngredient(this._ingredientsRepository);
    private static _updateIngredient = new UpdateIngredient(this._ingredientsRepository);


    static getIngredientsRepository(): IngredientRepository {
        return this._ingredientsRepository;
    }

    static getFindAllIngredients(): FindAllIngredients {
        return this._findAllIngredients;
    }

    static getFindIngredintById(): FindIngredientById {
        return this._findIngredientById;
    }

    static createIngredient(): CreateIngredient {
        return this._createIngredient;
    }

    static deleteIngredient(): DeleteIngredient {
        return this._deleteIngredient;
    }

    static updateIngredient(): UpdateIngredient {
        return this._updateIngredient;
    }
}

