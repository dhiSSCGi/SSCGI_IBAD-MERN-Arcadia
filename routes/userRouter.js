import { Router } from "express";

const router = Router();

import {
  createUser,
  getAllOrganizers,
  getAllUsers,
  getCurrentUser,
} from "../controllers/userController.js";
router.post("/", createUser);

router.get("/", getAllUsers);
router.get("/organizers", getAllOrganizers);
router.post("/current-user", getCurrentUser);

export default router;
