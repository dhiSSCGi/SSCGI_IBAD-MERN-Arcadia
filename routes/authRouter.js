import { Router } from "express";
import {
  register,
  login,
  logout,
  getCurrentUser,
} from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", validateRegisterInput, register);
// router.post("/register", register);

router.post("/login", validateLoginInput, login);
router.get("/current-user", authenticateUser, getCurrentUser);
router.get("/logout", logout);

export default router;
