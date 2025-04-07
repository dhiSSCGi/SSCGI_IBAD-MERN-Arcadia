import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";
import eventRouter from "./routes/eventRouter.js";
import bookingRouter from "./routes/bookingRouter.js";
import userRouter from "./routes/userRouter.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import cloudinary from "cloudinary";
import { authenticateUser } from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5100;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middleware setup
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Serve static files from React build
app.use(express.static(path.resolve(__dirname, "./client/dist")));

// API Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/event", eventRouter);
app.use("/api/v1/booking", bookingRouter);
app.use("/api/v1/user", userRouter);

// Serve index.html for all routes that are not API or static file requests
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

// Database connection
try {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.error("Database connection failed", err);
    });
  app.listen(port, () => {
    console.log(`Server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

// Test Route
app.get("/", (req, res) => {
  res.send("Hello World");
});
