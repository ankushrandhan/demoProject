import express, { NextFunction, Request, Response } from "express";
import { authRoutes } from "../components/admin/adminRoutes";
import swaggerUi from 'swagger-ui-express';
import {swaggerJSON} from '../app.swagger';
const router = express.Router();


router.use("/auth", authRoutes);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerJSON));
export { router as apiRoutes };
