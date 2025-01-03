import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET || '';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, JWT_SECRET as string, (err, user) => {
            if(err) return res.sendStatus(403);

            req.user = user;

            next();
        });
    } else {
        return res.status(401).json({ message: 'Authorization header missing.' });
    }
};