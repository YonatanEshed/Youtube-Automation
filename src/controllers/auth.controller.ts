import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { createUser, getUserByEmail } from '../services/user.services';
import { generateToken } from '../utils/jwt';

export const register = async (req: Request, res: Response) => {
    const { username, email, password, role } = req.body;

    try {
        const existingUser = await getUserByEmail(email);

        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await createUser(username, email, hashedPassword, role);

        const token = generateToken(user.id);

        return res.status(201).json({ user, token });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await getUserByEmail(email);

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user.id);

        return res.status(200).json({ user, token });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

export default {
    register,
    login,
};
