import { Request, Response } from "express";
import { AuthService } from "../../application/Auth/authService";
import { LoginDTO } from "../dto/Account/LoginDto";
import { CreateAccountDto } from "../dto/Account/CreateAccountDto";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

export class AuthController {
    constructor(private readonly authService: AuthService) {}

    async register(req: Request, res: Response) {
        try {
            const createAccountDto = plainToInstance(CreateAccountDto, req.body);
            const errors = await validate(createAccountDto);

            if (errors.length > 0) {
                return res.status(400).json({ message: "Data Validation Failed", errors });
            }

            const user = await this.authService.register(createAccountDto);
            res.status(201).json(user);
        } catch (error: any) {
            res.status(500).json({ message: "Internal Server Error", error: error.message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const loginDto = plainToInstance(LoginDTO, req.body);
            console.log(req.body);
            const errors = await validate(loginDto);

            if (errors.length > 0) {
                return res.status(400).json({ message: "Data Validation Failed", errors });
            }

            const token = await this.authService.login(loginDto);
            res.status(200).json({ token });
        } catch (error) {
            res.status(401).json({ message: "Invalid credentials" });
        }
    }
}
