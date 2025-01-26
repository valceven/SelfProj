import { IsString } from "class-validator";

export class createSuggestionDto {
    @IsString()
    firstName!: string;

    @IsString()
    lastName!: string;

    @IsString()
    email!: string;

    @IsString()
    phone!: string;

    @IsString()
    message!: string;
}