import { IIngredientRepository } from "../../domain/interfaces/IIngredientRepository";

export class DeleteIngredient {
    constructor(private ingredientRepository: IIngredientRepository) {}

    async execute(id: number) {
        return await this.ingredientRepository.delete(id);
    }
}