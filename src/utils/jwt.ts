import jwt from 'jsonwebtoken';
import configuration from '../config';

const JWT_SECRET = configuration.jwtSecret;

export const generateToken = (userId: number) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1d' });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET);
};
