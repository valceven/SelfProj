import { IsOptional, IsNumber, IsString } from "class-validator";

export class UpdateSalesDto {
    @IsOptional()
    @IsNumber()
    gross_sales!: number;

    @IsOptional()
    @IsNumber()
    expenses!: number;

    @IsOptional()
    @IsNumber()
    net_sales!: number;

    @IsOptional()
    @IsString()
    month_year!: string;
}