import { IIngredientRepository } from "../../domain/interfaces/IIngredientRepository";

export class FindAllIngredients {
    constructor(private ingredientRepository: IIngredientRepository) {}

    async execute() {
        return await this.ingredientRepository.findAll();
    }
}