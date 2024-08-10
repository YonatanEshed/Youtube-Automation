import { config } from 'dotenv';

config();

interface Config {
    port: number;
    nodeEnv: string;
    jwtSecret: string;
}

const configuration: Config = {
    port: parseInt(process.env.PORT || '3000'),
    nodeEnv: process.env.NODE_ENV || 'development',

    jwtSecret: process.env.JWT_SECRET || '',
};

export default configuration;
