import { IsString, IsNumber } from "class-validator";

export class CreateIngredientDto {
    @IsString()
    name!: string;

    @IsString()
    unit!: string;

    @IsNumber()
    price!: number;
}
