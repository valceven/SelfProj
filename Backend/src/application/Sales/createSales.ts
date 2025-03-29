import { ISalesRepository } from "../../domain/interfaces/ISalesRepository";
import { CreateSalesDto } from "../../interface/dto/Sales/CreateSalesDto";

export class CreateSales {
    constructor(private salesRepository: ISalesRepository) {}

    async execute(createSalesDto: CreateSalesDto) {
        
        const { gross_sales, expenses, net_sales } = createSalesDto;

        return await this.salesRepository.create({ gross_sales, expenses, net_sales});
    }
}