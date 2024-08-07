import { config } from 'dotenv';

config();

interface Config {
    port: number;
    nodeEnv: string;
}

const configuration: Config = {
    port: parseInt(process.env.PORT || '3000', 10),
    nodeEnv: process.env.NODE_ENV || 'development',
};

export default configuration;
