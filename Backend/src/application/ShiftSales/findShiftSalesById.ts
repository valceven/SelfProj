import { IShiftSalesRepository } from "../../domain/interfaces/IShiftSalesRepository";

export class FindShiftSalesById {
    constructor(private shiftSalesRepository: IShiftSalesRepository) {}

    async execute(id: number) {
        
        return await this.shiftSalesRepository.findById(id);
    }
}