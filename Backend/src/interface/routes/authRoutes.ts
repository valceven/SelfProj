import { Router } from "express";
import { AuthController } from "../controllers/authController";
import { AuthService } from "../../application/Auth/authService";

const router = Router();
const authController = new AuthController(new AuthService());

router.post("/register", function(req, res) {
    authController.register(req, res);
  });
  
  router.post("/login", function(req, res) {
    authController.login(req, res);
  });

export { router as authRoutes };
