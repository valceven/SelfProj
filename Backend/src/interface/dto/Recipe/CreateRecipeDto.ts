import { IsString, IsNumber } from "class-validator";

export class CreateRecipeDto {
    @IsString()
    details!: string;

    @IsString()
    name!: string;

    @IsNumber()
    price!: number;
}
