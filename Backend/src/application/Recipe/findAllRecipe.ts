import { IRecipeRepository } from "../../domain/interfaces/IRecipeRepository";

export class FindAllRecipes {
    constructor(private recipeRepository: IRecipeRepository) {}

    async execute() {
        return await this.recipeRepository.findAll();
    }
}