import supabase from "../../infrastructure/database/supabaseClient";
import jwt from 'jsonwebtoken';
import { LoginDTO } from "../../interface/dto/Account/LoginDto";
import { CreateAccountDto } from "../../interface/dto/Account/CreateAccountDto";
import bcrypt from 'bcryptjs';

export class AuthService {
    private jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

    async register(dto: CreateAccountDto) {
        const { username, email, password } = dto;

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const { data, error } = await supabase
            .from('Account')
            .insert([{ username, email, password: hashedPassword }]);

        if (error) throw new Error(error.message);
        return { message: 'User registered successfully', user: data };
    }

    async login(dto: LoginDTO) {
        const { username, password } = dto;
        console.log(dto);
    
        try {
            const { data, error } = await supabase
                .from('Account')
                .select('*')
                .eq('username', username);
            
            console.log("Users found:", data?.length || 0);
            
            if (!data || data.length === 0) {
                return {
                    success: false,
                    message: "Username not found",
                };
            }
            
            if (data.length > 1) {
                console.error("Multiple users found with same username:", username);
                throw new Error('Username conflict detected');
            }
            
            const user = data[0];
            
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                return {
                    success: false,
                    message: "Incorrect Password"
                };
            }
            
            const token = jwt.sign({ id: user.id, username: user.username }, this.jwtSecret, {
                expiresIn: '1m'
            });
            
            return {
                success: true,
                token,
                message: "Login successful"
            };
            
        } catch (error: any) {
            console.error("Login error:", error.message);
            throw error;
        }
    }

    verifyToken(token: string) {
        try {
            return jwt.verify(token, this.jwtSecret);
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}