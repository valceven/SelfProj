import { Request, Response } from "express";
import { FindAllRecipes } from "../../application/Recipe/findAllRecipe";
import { FindRecipeById } from "../../application/Recipe/findRecipeById";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateRecipe } from "../../application/Recipe/createRecipe";
import { CreateRecipeDto } from "../dto/Recipe/CreateRecipeDto";
import { DeleteRecipe } from "../../application/Recipe/deleteRecipe";

export class RecipeController {

    constructor(
        private readonly findAllRecipesUseCase: FindAllRecipes,
        private readonly findRecipeByIdUseCase: FindRecipeById,
        private readonly createRecipeUseCase: CreateRecipe,
        private readonly deleteRecipeUseCase: DeleteRecipe
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

    async createRecipe(req: Request, res: Response): Promise<void> {
        try {
            const createRecipeDto = plainToInstance(CreateRecipeDto, req.body);
            const errors = await validate(createRecipeDto);

            if (errors.length > 0) {
                res.status(400).json({ message: "Validation Failed", errors });
                return;
            }

            const recipe = await this.createRecipeUseCase.execute(createRecipeDto);
            res.status(201).json(recipe);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async deleteRecipe(req: Request, res: Response) {
        try {
            const { id } = req.body;

            if(isNaN(Number(id))) {
                res.status(400).json({ message: "Invalid Recipe ID" });
            }

            await this.deleteRecipeUseCase.execute(Number(id));

            res.status(200).json({ message: "Recipe deleted successfully" });
        } catch (error) {
            if(error instanceof Error) {
                if (error.message === "Recipe not found") {
                    res.status(404).json({ message: "Recipe Not Found" });
                } else {
                    res.status(500).json({ message: error.message });
                }
            } else {
                res.status(500).json({ message: "An unexpected error occurred." });
            }
        }
    }
}
