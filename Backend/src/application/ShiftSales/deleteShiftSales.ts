import { IShiftSalesRepository } from "../../domain/interfaces/IShiftSalesRepository";

export class DeleteShiftSales {
    constructor(private shiftSalesRepository: IShiftSalesRepository) {}

    async execute(id: number) {

        return await this.shiftSalesRepository.delete(id);
    }
}