import { UpdateSalesDto } from "../../interface/dto/Sales/UpdateSalesDto";
import { ISalesRepository } from "../../domain/interfaces/ISalesRepository";

export class UpdateSales {
    constructor(private salesRepository: ISalesRepository){}

    async execute(id: number, updateSalesDto: UpdateSalesDto) {
        
        const { gross_sales, expenses, net_sales, month_year } = updateSalesDto;

        return this.salesRepository.update(id, { gross_sales, expenses, net_sales, month_year} );
    }
}