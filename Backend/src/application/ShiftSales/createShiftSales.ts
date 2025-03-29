import { IShiftSalesRepository } from "../../domain/interfaces/IShiftSalesRepository";
import { CreateShiftSalesDto } from "../../interface/dto/ShiftSales/CreateShiftSalesDto";

export class CreateShiftSales {
    constructor(private shiftSalesRepository: IShiftSalesRepository) {}

    async execute(createShiftSalesDto: CreateShiftSalesDto) {

        const { shift_type, gross_sales, expenses, net_sales } = createShiftSalesDto;

        return await this.shiftSalesRepository.create({shift_type, gross_sales, expenses, net_sales});
    }
}