import { IRecipeRepository } from "../../domain/interfaces/IRecipeRepository";

export class DeleteRecipe {
    constructor(private recipeRepository: IRecipeRepository) {}

    async execute(id: number) {
        return this.recipeRepository.delete(id);
    }
}