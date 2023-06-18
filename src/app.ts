import cors from "cors";
import express, { Application, Request, Response } from "express";
import { ApplicationRoutes } from "./app/routes";

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
export default app;
