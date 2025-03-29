import { Router } from "express";

const router = Router();

import { getAllUsers } from "../controllers/userController.js";
router.get("/", getAllUsers);

export default router;
