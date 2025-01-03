import express from "express";
import { recipeRoutes } from "./interface/routes/recipeRoutes";
import { errorHandler } from "./interface/middleware/errorHandler";
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", recipeRoutes);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
