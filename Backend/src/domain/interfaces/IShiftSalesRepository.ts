import { ShiftSales } from "../entities/ShiftSales";
import { CreateShiftSalesDto } from '../../interface/dto/ShiftSales/CreateShiftSalesDto';
import { UpdateShiftSalesDto } from "../../interface/dto/ShiftSales/UpdateShiftSalesDto";

export interface IShiftSalesRepository {
    findAll(): Promise<ShiftSales[]>;
    findById(id: number): Promise<ShiftSales>;
    create(createShiftSalesDto: CreateShiftSalesDto): Promise<ShiftSales>;
    update(id: number, updateShiftSalesDto: UpdateShiftSalesDto): Promise<void>;
    delete(id: number): Promise<void>; 
}