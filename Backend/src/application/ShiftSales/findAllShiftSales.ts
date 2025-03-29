import { IShiftSalesRepository } from "../../domain/interfaces/IShiftSalesRepository";

export class FindAllShiftSales {
    constructor(private shiftSalesRepository: IShiftSalesRepository) {}

    async execute() {
        
        return await this.shiftSalesRepository.findAll();
    }
}