import { ISalesRepository } from "../../domain/interfaces/ISalesRepository";

export class FindAllSales {
    constructor(private salesRepository: ISalesRepository) {}

    async execute() {

        return await this.salesRepository.findAll();
    }
}