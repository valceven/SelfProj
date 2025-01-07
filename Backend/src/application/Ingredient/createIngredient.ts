import { IIngredientRepository } from "../../domain/interfaces/IIngredientRepository";
import { CreateIngredientDto } from "../../interface/dto/Ingredient/CreateIngredientDto";

export class CreateIngredient {
    constructor(private ingredientRepository: IIngredientRepository) {}

    async execute(createIngredientDto: CreateIngredientDto) {

        const { name, unit, price } = createIngredientDto;

        return await this.ingredientRepository.create({ name, unit, price });
    }
}