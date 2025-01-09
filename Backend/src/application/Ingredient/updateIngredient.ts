import { IIngredientRepository } from "../../domain/interfaces/IIngredientRepository";
import { UpdateIngredientDto } from "../../interface/dto/Ingredient/UpdateIngredientDto";

export class UpdateIngredient {
    constructor(private ingredientRepository: IIngredientRepository) {}

    async execute(id: number, updateIngredientDto: UpdateIngredientDto) {

        const { name, unit, price } = updateIngredientDto;

        return await this.ingredientRepository.update(id, {name, unit, price});
    }
}