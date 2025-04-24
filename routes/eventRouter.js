import { Router } from "express";
import {
  createEvent,
  getAllEvents,
  uploadXLSXorCSV,
  updateEvent,
  deleteEvent,
  restoreEvent,
} from "../controllers/eventController.js";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

router.post("/", upload.single("image"), createEvent);
router.get("/", getAllEvents);
router.post("/upload-participants", upload.single("data"), uploadXLSXorCSV);
router.patch("/update/:id", upload.single("image"), updateEvent);
router.patch("/delete/:id", deleteEvent);
router.patch("/restore/:id", restoreEvent);

export default router;
