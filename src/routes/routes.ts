import express, { NextFunction, Request, Response } from "express";
import {adminRoutes} from "../components/admin/adminRoutes";
import {userRoutes} from "../components/users/user.routes";
import swaggerUi from 'swagger-ui-express';
import {swaggerJSON} from '../app.swagger';
const router = express.Router();


router.use("/admin", adminRoutes);
router.use("/user", userRoutes);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerJSON));
export { router as apiRoutes };
