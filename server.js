import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";
import eventRouter from "./routes/eventRouter.js";
import userRouter from "./routes/userRouter.js";
import solutionRouter from "./routes/solutionRouter.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import cloudinary from "cloudinary";
import { authenticateUser } from "./middleware/authMiddleware.js";
import fs from "fs";

import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const port = process.env.PORT || 5100;
const __dirname = dirname(fileURLToPath(import.meta.url));
const logoBase64 = fs.readFileSync(
  path.join(__dirname, "public/logo.png"),
  "base64"
);
const logoSrc = `data:image/png;base64,${logoBase64}`;
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
app.use("/api/v1/user", userRouter);
app.use("/api/v1/solution", solutionRouter);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "idatuhasmin@gmail.com",
    pass: "mqartnhbqcvflfce",
  },
});

// Email sending route
app.post("/api/v1/send-email", (req, res) => {
  const { firstName, lastName, email, contactNumber, notes, logo } = req.body;

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f7f7f7;
          margin: 0;
          padding: 20px;
        }
        .email-container {
          background-color: #ffffff;
          border: 1px solid #ddd;
          border-radius: 6px;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        h2 {
          color: #333;
          margin-bottom: 20px;
        }
        .field {
          margin-bottom: 15px;
        }
        .label {
          font-weight: bold;
          color: #555;
        }
        .value {
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div style="text-align: center; margin-bottom: 20px;">
         <img src="${logoSrc}" alt="Company Logo" style="max-width: 150px;" />
        </div>
        <h2>New Contact Form Submission</h2>
        
        <div class="field">
          <div class="label">Name:</div>
          <div class="value">${firstName} ${lastName}</div>
        </div>

        <div class="field">
          <div class="label">Email:</div>
          <div class="value">${email}</div>
        </div>

        <div class="field">
          <div class="label">Contact Number:</div>
          <div class="value">${contactNumber}</div>
        </div>

        <div class="field">
          <div class="label">Notes:</div>
          <div class="value">${notes}</div>
        </div>

      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: `${email}`,
    to: "idatuhasmin@gmail.com",
    subject: "New Contact Form Submission",
    text: `
      You have a new contact form submission:

      Name: ${firstName} ${lastName}
      Email: ${email}
      Contact Number: ${contactNumber}
      Notes: ${notes}
    `,
    html: htmlContent, // <-- HTML version here
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Error sending email.");
    }
    console.log("Email sent: " + info.response);
    return res.status(200).send("Email sent successfully.");
  });
});

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
