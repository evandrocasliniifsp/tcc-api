import dotenv from 'dotenv';

dotenv.config();

export const POSTGRES_USER = process.env.POSTGRES_USER || 'postgres';
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || 'postgres';
export const POSTGRES_DB = process.env.POSTGRES_DB || 'api';
export const POSTGRES_PORT = Number(process.env.POSTGRES_PORT) || 5432;
export const POSTGRES_HOST = process.env.POSTGRES_HOST || 'localhost';
export const SERVER_PORT = Number(process.env.SERVER_PORT) || 3000;
