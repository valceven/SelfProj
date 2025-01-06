import { IIngredientRepository } from "../../domain/interfaces/IIngredientRepository";

export class FindIngredientById {
    constructor (private ingredientRepository: IIngredientRepository) {}

    async execute(id: number) {
        return await this.ingredientRepository.findById(id);
    }
}