import { IsNumber } from "class-validator";

export class CreateShiftSalesDto {
    @IsNumber()
    shift_type!: number;

    @IsNumber()
    gross_sales!: number;

    @IsNumber()
    expenses!: number;

    @IsNumber()
    net_sales!: number;
}