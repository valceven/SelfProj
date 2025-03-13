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

        const { data, error } = await supabase
            .from('Account')
            .select('id, username, password')
            .eq('username', username)
            .single();

        if (error || !data) throw new Error('Invalid username or password');

        const isValidPassword = await bcrypt.compare(password, data.password);
        if (!isValidPassword) throw new Error('Invalid username or password');

        const token = jwt.sign({ id: data.id, username: data.username }, this.jwtSecret, {
            expiresIn: '1h'
        });

        return token;
    }

    verifyToken(token: string) {
        try {
            return jwt.verify(token, this.jwtSecret);
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}