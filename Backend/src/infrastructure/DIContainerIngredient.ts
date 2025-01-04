import { FindAllIngredients } from "../application/Ingredient/findAllIngredients";
import { IngredientRepository } from "./repositories/IngredientRepository";

export default class DIContainer {
    private static _ingredientsRepository = new IngredientRepository();
    private static _findAllIngredients = new FindAllIngredients(this._ingredientsRepository);

    static getIngredientsRepository() {
        return this._ingredientsRepository;
    }

    static getFindAllIngredients() {
        return this._findAllIngredients;
    }

}

