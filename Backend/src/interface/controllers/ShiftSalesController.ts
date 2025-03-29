import { Request, Response } from "express";
import DIContainer from "../../infrastructure/DIContainerShiftSales";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateShiftSalesDto } from "../dto/ShiftSales/CreateShiftSalesDto";
import { UpdateShiftSalesDto } from "../dto/ShiftSales/UpdateShiftSalesDto";

export class ShiftSalesController {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const shiftSales = await DIContainer.getFindAllShiftSalesUseCase().execute();
            res.json(shiftSales);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            if (isNaN(Number(id))) {
                res.status(400).json({ message: "Invalid Shift Sales ID" });
                return;
            }

            const shiftSales = await DIContainer.getFindShiftSalesByIdUseCase().execute(Number(id));

            if (!shiftSales) {
                res.status(404).json({ message: "Shift Sale not found" });
                return;
            }

            res.json(shiftSales);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async createShiftSales(req: Request, res: Response): Promise<void> {
        try {
            const createShiftSalesDto = plainToInstance(CreateShiftSalesDto, req.body);
            const errors = await validate(createShiftSalesDto);

            if (errors.length > 0) {
                res.status(400).json({ message: "Validation Failed", errors });
                return;
            }

            const shiftSale = await DIContainer.createShiftSalesUseCase().execute(createShiftSalesDto);
            res.status(201).json(shiftSale);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async updateShiftSales(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            if (isNaN(Number(id))) {
                res.status(400).json({ message: "Invalid Shift Sales ID" });
                return;
            }

            const updateShiftSalesDto = plainToInstance(UpdateShiftSalesDto, req.body);
            const errors = await validate(updateShiftSalesDto);

            if (errors.length > 0) {
                res.status(400).json({ message: "Validation Failed", errors });
                return;
            }

            await DIContainer.updateShiftSalesUseCase().execute(Number(id), updateShiftSalesDto);
            res.status(200).json({ message: "Shift Sale updated successfully" });
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async deleteShiftSales(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            if (isNaN(Number(id))) {
                res.status(400).json({ message: "Invalid Shift Sales ID" });
                return;
            }

            await DIContainer.deleteShiftSalesUseCase().execute(Number(id));
            res.status(200).json({ message: "Shift Sale deleted successfully" });
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === "Shift Sale not found") {
                    res.status(404).json({ message: "Shift Sale Not Found" });
                } else {
                    res.status(500).json({ message: error.message });
                }
            } else {
                res.status(500).json({ message: "An unexpected error occurred." });
            }
        }
    }
}