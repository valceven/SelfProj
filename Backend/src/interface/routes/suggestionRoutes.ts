import { Router } from "express";
import DiContainer from "../../infrastructure/DIContainerSuggestion";
import { SuggestionController } from "../controllers/SuggestionController";

const router = Router();

const createSuggestion  = DiContainer.createIngredient();
const findAllSuggestions = DiContainer.findAllSuggestions();

const suggestionController = new SuggestionController(
    createSuggestion,
    findAllSuggestions
);

router.post("/suggestions", (req, res) => suggestionController.createSuggestion(req, res));
router.get("/suggestions", (req, res) => suggestionController.findAllSuggestions(req,res));

export { router as suggestionRoutes };