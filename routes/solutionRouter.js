import { Router } from "express";
import {
  createSolution,
  getAllSolutions,
  updateSolution,
  deleteSolution,
} from "../controllers/solutionController.js";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

router.post("/", upload.single("image"), createSolution);
router.get("/", getAllSolutions);
router.patch("/update/:id", upload.single("image"), updateSolution);
router.delete("/delete/:id", deleteSolution);

export default router;
