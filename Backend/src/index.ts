import express from "express";
import { recipeRoutes } from "./interface/routes/recipeRoutes";
import { errorHandler } from "./interface/middleware/errorHandler";

const app = express();

app.use(express.json());
app.use("/api", recipeRoutes);
app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
