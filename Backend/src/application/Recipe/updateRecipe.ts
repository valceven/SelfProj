import { IRecipeRepository } from "../../domain/interfaces/IRecipeRepository";
import { UpdateRecipeDto } from "../../interface/dto/Recipe/UpdateRecipeDto";

export class UpdateRecipe {
    constructor(private recipeRepository: IRecipeRepository) {}

    async execute(id: number, updateRecipeDto: UpdateRecipeDto) {

        const { name, details, price } = updateRecipeDto;

        return await this.recipeRepository.update(id,{name, details, price});
    }
}