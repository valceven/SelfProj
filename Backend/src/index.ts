import express from "express";
import * as dotenv from 'dotenv';
dotenv.config();

import { recipeRoutes } from "./interface/routes/recipeRoutes";
import { ingredientRoutes } from "./interface/routes/ingredientRoutes";
import { suggestionRoutes } from "./interface/routes/suggestionRoutes";
import { errorHandler } from "./interface/middleware/errorHandler";
import { setupSwagger } from "./interface/swagger";
import { authRoutes } from "./interface/routes/authRoutes";

const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    credentials: true // If cookies or authentication are involved
  }));

app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", recipeRoutes);
app.use("/api", ingredientRoutes);
app.use("/api", suggestionRoutes);
app.use(errorHandler);
setupSwagger(app);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
