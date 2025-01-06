import { Request, Response } from "express";
import { FindAllRecipes } from "../../application/Recipe/findAllRecipe";
import { FindRecipeById } from "../../application/Recipe/findRecipeById";

export class RecipeController {

    constructor(
        private readonly findAllRecipesUseCase: FindAllRecipes,
        private readonly findRecipeByIdUseCase: FindRecipeById
    ) {}

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const recipes = await this.findAllRecipesUseCase.execute();
            res.json(recipes);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            if (isNaN(Number(id))) {
                res.status(400).json({ message: "Invalid Recipe ID "});
            }

            const recipe = await this.findRecipeByIdUseCase.execute(Number(id));

            if(!recipe) {
                res.status(404).json({ message: "Recipe not found" });
                return;
            }

            res.json(recipe);
        } catch (error) {
            res.status(500).json({ message: "Internval Server Error" });
        }
    }
}
