import { Router } from "express";
import { createEvent, getAllEvents } from "../controllers/eventController.js";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

router.post("/", upload.single("image"), createEvent);
router.get("/", getAllEvents);

export default router;
