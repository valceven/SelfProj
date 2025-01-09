import { IRecipeRepository } from "../../domain/interfaces/IRecipeRepository";
import { CreateRecipeDto } from "../../interface/dto/Recipe/CreateRecipeDto";

export class CreateRecipe {
    constructor(private recipeRepository: IRecipeRepository) {}

    async execute(createRecipeDto: CreateRecipeDto) {

        const { name, details, price } = createRecipeDto;

        return await this.recipeRepository.create({ name, details, price});
    }
}