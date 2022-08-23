import express from "express";
import { authController } from "./adminController";
const router = express.Router();

// router.get("/login", authController.login);


export { router as authRoutes };