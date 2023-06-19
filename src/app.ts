import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { ApplicationRoutes } from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import httpStatus from "http-status";

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

// Not Found API Error
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found!",
    errorMessages: [{ path: req.originalUrl, message: "API Not Found!" }],
  });
  next();
}); 

export default app;
