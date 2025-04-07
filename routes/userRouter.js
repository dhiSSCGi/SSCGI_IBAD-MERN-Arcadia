import { Router } from "express";

const router = Router();
import upload from "../middleware/multerMiddleware.js";
import {
  createUser,
  deleteUser,
  getAllOrganizers,
  getAllUsers,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
router.post("/", upload.single("image"), createUser);

router.get("/", getAllUsers);
router.get("/organizers", getAllOrganizers);
router.post("/current-user", getCurrentUser);
router.patch("/update/:id", upload.single("image"), updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
