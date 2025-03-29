import { ISalesRepository } from "../../domain/interfaces/ISalesRepository";

export class FindSalesById {
    constructor(private salesRepository: ISalesRepository) {}

    async execute(id: number) {
        
        return await this.salesRepository.findById(id);
    }
}