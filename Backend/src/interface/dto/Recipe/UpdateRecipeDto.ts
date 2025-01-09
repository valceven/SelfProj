import { IsOptional, IsString, IsNumber } from "class-validator";

export class UpdateRecipeDto {
    @IsOptional()
    @IsString()
    details!: string;

    @IsOptional()
    @IsString()
    name!: string;

    @IsOptional()
    @IsNumber()
    price!: number;
}