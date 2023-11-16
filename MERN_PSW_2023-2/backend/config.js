import { config } from "dotenv";
config();
console.log('Puerto conectado');
export const MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 4000;