import express from "express";
import userRoutes from "./app/routes/users.routes.js";

//settings
const app = express();
//const __dirname = dirname(fileURLToPath(import.meta.url));

//middleware
app.use(express.json());


//routes
app.use(userRoutes)
export default app;