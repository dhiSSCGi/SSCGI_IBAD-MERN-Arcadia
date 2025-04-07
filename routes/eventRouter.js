import { Router } from "express";
import {
  createEvent,
  getAllEvents,
  uploadXLSXorCSV,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

router.post("/", upload.single("image"), createEvent);
router.get("/", getAllEvents);
router.post("/upload-participants", upload.single("data"), uploadXLSXorCSV);
router.patch("/update/:id", upload.single("image"), updateEvent);
router.delete("/delete/:id", deleteEvent);

export default router;
