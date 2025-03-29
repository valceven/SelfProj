import { ISalesRepository } from "../../domain/interfaces/ISalesRepository";

export class DeleteSales {
    constructor(private salesRepository: ISalesRepository){}

    async execute(id: number) {
        return this.salesRepository.delete(id);
    }
}