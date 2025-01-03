import { FindAllIngredients } from "../application/Ingredient/findAllIngredients";
import { IngredientRepository } from "./repositories/IngredientRepository";

class DIContainer {
    private ingredientsRepository: IngredientRepository;
    private findAllIngredients: FindAllIngredients;

    constructor() {
        this.ingredientsRepository = new IngredientRepository();
        this.findAllIngredients = new FindAllIngredients(this.ingredientsRepository);
    }

    getIngredientsRepository() {
        return this.ingredientsRepository;
    }

    getFindAllIngredients() {
        return this.findAllIngredients;
    }

}

const diContainer = new DIContainer();
export { diContainer }

