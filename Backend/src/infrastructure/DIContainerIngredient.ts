import { FindAllIngredients } from "../application/Ingredient/findAllIngredients";
import { IngredientRepository } from "./repositories/IngredientRepository";
import { FindIngredientById } from "../application/Ingredient/findIngredientById";

export default class DIContainer {
    private static _ingredientsRepository = new IngredientRepository();
    private static _findAllIngredients = new FindAllIngredients(this._ingredientsRepository);
    private static _findIngredientById = new FindIngredientById(this._ingredientsRepository);

    static getIngredientsRepository() {
        return this._ingredientsRepository;
    }

    static getFindAllIngredients() {
        return this._findAllIngredients;
    }

    static getFindIngredintById() {
        return this._findIngredientById;
    }

}

