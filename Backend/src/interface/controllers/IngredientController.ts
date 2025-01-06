import { Request, Response } from "express";
import { FindAllIngredients } from "../../application/Ingredient/findAllIngredients";
import { FindIngredientById } from "../../application/Ingredient/findIngredientById";
import { CreateIngredientDto } from "../dto/Ingredient/CreateIngredientDto";
import { validate } from "class-validator";

export class IngredientController {
    constructor(
        private readonly findAllIngredientsUseCase: FindAllIngredients,
        private readonly findIngredientByIdUseCase: FindIngredientById
    ) {}

    async getAll(req: Request, res: Response) {
        try {
            const ingredients = await this.findAllIngredientsUseCase.execute();
            res.json(ingredients);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error "});
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if(isNaN(Number(id))) {
                res.status(400).json({ message: "Invalid Ingredient ID" });
            }

            const ingredient = await this.findIngredientByIdUseCase.execute(Number(id));

            if(!ingredient) {
                res.status(404).json({ message: "Ingredient Not Found" });
            }

            res.json(ingredient);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}