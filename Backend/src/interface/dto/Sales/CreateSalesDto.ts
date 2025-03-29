import { IsString, IsNumber } from 'class-validator';

export class CreateSalesDto {
    @IsNumber()
    gross_sales: number;

    @IsNumber()
    expenses: number;

    @IsNumber()
    net_sales: number;
}