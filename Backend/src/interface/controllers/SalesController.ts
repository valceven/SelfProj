import { Request, Response } from "express";
import DIContainer from "../../infrastructure/DIContainerSales";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateSalesDto } from "../dto/Sales/CreateSalesDto";
import { UpdateSalesDto } from "../dto/Sales/UpdateSalesDto";

export class SalesController {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const sales = await DIContainer.getFindAllSalesUseCase().execute();
            res.json(sales);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            if (isNaN(Number(id))) {
                res.status(400).json({ message: "Invalid Sales ID" });
                return;
            }

            const sale = await DIContainer.getFindSalesByIdUseCase().execute(Number(id));

            if (!sale) {
                res.status(404).json({ message: "Sale not found" });
                return;
            }

            res.json(sale);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async createSales(req: Request, res: Response): Promise<void> {
        try {
            const createSalesDto = plainToInstance(CreateSalesDto, req.body);
            const errors = await validate(createSalesDto);

            if (errors.length > 0) {
                res.status(400).json({ message: "Validation Failed", errors });
                return;
            }

            const sale = await DIContainer.createSalesUseCase().execute(createSalesDto);
            res.status(201).json(sale);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async updateSales(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            if (isNaN(Number(id))) {
                res.status(400).json({ message: "Invalid Sales ID" });
                return;
            }

            const updateSalesDto = plainToInstance(UpdateSalesDto, req.body);
            const errors = await validate(updateSalesDto);

            if (errors.length > 0) {
                res.status(400).json({ message: "Validation Failed", errors });
                return;
            }

            await DIContainer.updateSalesUseCase().execute(Number(id), updateSalesDto);
            res.status(200).json({ message: "Sale updated successfully" });
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async deleteSales(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            if (isNaN(Number(id))) {
                res.status(400).json({ message: "Invalid Sales ID" });
                return;
            }

            await DIContainer.deleteSalesUseCase().execute(Number(id));
            res.status(200).json({ message: "Sale deleted successfully" });
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === "Sale not found") {
                    res.status(404).json({ message: "Sale Not Found" });
                } else {
                    res.status(500).json({ message: error.message });
                }
            } else {
                res.status(500).json({ message: "An unexpected error occurred." });
            }
        }
    }
}
