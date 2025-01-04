import { Request, Response } from "express";
import { FindAllRecipes } from "../../application/Recipe/findAllRecipe";

export class RecipeController {
    constructor(private readonly findAllRecipesUseCase: FindAllRecipes) {}

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const recipes = await this.findAllRecipesUseCase.execute();
            res.json(recipes);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
