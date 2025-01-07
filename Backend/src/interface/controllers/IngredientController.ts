import { Request, Response } from "express";
import { FindAllIngredients } from "../../application/Ingredient/findAllIngredients";
import { FindIngredientById } from "../../application/Ingredient/findIngredientById";
import { CreateIngredientDto } from "../dto/Ingredient/CreateIngredientDto";
import { CreateIngredient } from "../../application/Ingredient/createIngredient";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { DeleteIngredient } from "../../application/Ingredient/deleteIngredient";

export class IngredientController {
    constructor(
        private readonly findAllIngredientsUseCase: FindAllIngredients,
        private readonly findIngredientByIdUseCase: FindIngredientById,
        private readonly createIngredientUseCase: CreateIngredient,
        private readonly deleteIngredientUseCase: DeleteIngredient
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

    async createIngredient(req: Request, res: Response) {
        try {
            const createIngredientDto = plainToInstance(CreateIngredientDto, req.body);
            const errors = await validate(createIngredientDto);

            if (errors.length > 0) {
                res.status(400).json({ message: "Data Validation Failed", createIngredientDto });
                return;
            }

            const ingredient = await this.createIngredientUseCase.execute(createIngredientDto);
            res.status(201).json(ingredient);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async deleteIngredient(req: Request, res: Response) {
        try {
            const { id } = req.params;
    
            if (isNaN(Number(id))) {
                res.status(400).json({ message: "Invalid Ingredient ID" });
                return;
            }
    
            await this.deleteIngredientUseCase.execute(Number(id));
    
            res.status(200).json({ message: "Ingredient deleted successfully" });
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === "Ingredient not found") {
                    res.status(404).json({ message: "Ingredient Not Found" });
                } else {
                    res.status(500).json({ message: error.message });
                }
            } else {
                res.status(500).json({ message: "An unexpected error occurred." });
            }
        }
    }
}