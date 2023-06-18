import cors from "cors";
import express, { Application, Request, Response } from "express";
import { ApplicationRoutes } from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Route
app.use("/api/v1/", ApplicationRoutes);

// Health Check
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Digital Cow Hut 🐂🐃");
});

// Global Error Handler
app.use(globalErrorHandler);

export default app;
