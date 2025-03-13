import { IsString, IsNumber } from "class-validator";

export class CreateAccountDto {
    @IsString()
    email!: string;

    @IsString()
    username!: string;

    @IsString()
    password!: string;
}