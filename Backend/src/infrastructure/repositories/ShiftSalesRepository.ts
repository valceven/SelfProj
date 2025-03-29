import { ShiftSales } from "../../domain/entities/ShiftSales";
import { IShiftSalesRepository } from "../../domain/interfaces/IShiftSalesRepository";
import { CreateShiftSalesDto } from "../../interface/dto/ShiftSales/CreateShiftSalesDto";
import { UpdateShiftSalesDto } from "../../interface/dto/ShiftSales/UpdateShiftSalesDto";

export class ShiftSalesRepository implements IShiftSalesRepository {
    findAll(): Promise<ShiftSales[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<ShiftSales> {
        throw new Error("Method not implemented.");
    }
    create(createShiftSalesDto: CreateShiftSalesDto): Promise<ShiftSales> {
        throw new Error("Method not implemented.");
    }
    update(id: number, updateShiftSalesDto: UpdateShiftSalesDto): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}