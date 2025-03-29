import { Sales } from "../entities/Sales";
import { CreateSalesDto } from "../../interface/dto/Sales/CreateSalesDto";
import { UpdateSalesDto } from "../../interface/dto/Sales/UpdateSalesDto";

export interface ISalesRepository {
    findAll(): Promise<Sales[]>;
    findById(id: number): Promise<Sales | null>;
    create(createSalesDto: CreateSalesDto): Promise<Sales>;
    update(id: number, updateSalesDto: UpdateSalesDto): Promise<void>;
    delete(id: number): Promise<void>;
}