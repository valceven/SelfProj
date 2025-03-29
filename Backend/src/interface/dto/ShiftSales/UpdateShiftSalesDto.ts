import { IsOptional, IsNumber } from "class-validator";

export class UpdateShiftSalesDto {
    @IsOptional()
    @IsNumber()
    shift_type!: number;

    @IsOptional()
    @IsNumber()
    gross_sales!: number;

    @IsOptional()
    @IsNumber()
    expenses!: number;

    @IsOptional()
    @IsNumber()
    net_sales!: number;
}