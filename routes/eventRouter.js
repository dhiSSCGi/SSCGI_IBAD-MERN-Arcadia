import { Router } from "express";
import { createEvent, getAllEvents } from "../controllers/eventController.js";

const router = Router();

router.post("/", createEvent);
router.get("/", getAllEvents);

export default router;
