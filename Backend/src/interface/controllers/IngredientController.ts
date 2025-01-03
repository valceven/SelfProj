import { Request, Response } from "express";
import { FindAllIngredients } from "../../application/Ingredient/findAllIngredients";
import { CreateIngredientDto } from "../dto/Ingredient/CreateIngredientDto";
import { validate } from "class-validator";

export class IngredientController {
    constructor(private readonly findAllIngredientsUseCase: FindAllIngredients) {}

    async getAll(req: Request, res: Response) {
        try {
            const ingredients = await this.findAllIngredientsUseCase.execute();
            res.json(ingredients);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error "});
        }
    }
}