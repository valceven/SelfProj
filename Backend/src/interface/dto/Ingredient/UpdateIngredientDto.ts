import { IsOptional, IsNumber, IsString } from "class-validator";

export class UpdateIngredientDto {
    @IsOptional()
    @IsString()
    name!: string;

    @IsOptional()
    @IsString()
    unit!: string;

    @IsOptional()
    @IsNumber()
    price!: number;
}