import { IRecipeRepository } from "../../domain/interfaces/IRecipeRepository";

export class FindRecipeById {
    constructor(private recipeRepository: IRecipeRepository) {}

    async execute(id: number) {
        return await this.recipeRepository.findById(id);
    }
}