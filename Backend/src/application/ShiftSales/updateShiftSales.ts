import { IShiftSalesRepository } from "../../domain/interfaces/IShiftSalesRepository";
import { UpdateShiftSalesDto } from "../../interface/dto/ShiftSales/UpdateShiftSalesDto";

export class UpdateShiftSales {
    constructor(private shiftSalesRepository: IShiftSalesRepository) {}

    async execute(id:number, updateShiftSalesDto: UpdateShiftSalesDto) {

        const { shift_type, gross_sales, expenses, net_sales } = updateShiftSalesDto;

        return await this.shiftSalesRepository.update(id, {shift_type, gross_sales, expenses, net_sales});
    }
}