import express from "express";
import * as dotenv from 'dotenv';
dotenv.config();

import { recipeRoutes } from "./interface/routes/recipeRoutes";
import { ingredientRoutes } from "./interface/routes/ingredientRoutes";
import { errorHandler } from "./interface/middleware/errorHandler";
import { setupSwagger } from "./interface/swagger";

const app = express();

app.use(express.json());
app.use("/api", recipeRoutes);
app.use("/api",ingredientRoutes);
app.use(errorHandler);
setupSwagger(app);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
