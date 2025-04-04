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
app.use(cookieParser());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
app.use(express.json());
app.use(morgan("dev"));
// app.use(express.static(path.resolve(__dirname, "./client/dist")));
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
app.use(express.static(path.resolve(__dirname, "./client/dist")));
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
  });
}

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
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/event", eventRouter);
app.use("/api/v1/booking", bookingRouter);
app.use("/api/v1/user", userRouter);
