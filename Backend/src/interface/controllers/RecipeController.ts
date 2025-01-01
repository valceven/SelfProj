import { Request, Response } from "express";
import { DIContainer } from "../../infrastructure/DIContainer";
import { CreateRecipeDto } from "../dto/CreateRecipeDto";
import { validate } from "class-validator";

export class RecipeController {
    private getAllRecipes = DIContainer.getFindAllRecipesUseCase();

    async create(req: Request, res: Response) {
        const dto = Object.assign(new CreateRecipeDto(), req.body);
        const errors = await validate(dto);

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const recipes = await this.getAllRecipes.execute();
            res.json(recipes);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error"});
        }
        
    }
}