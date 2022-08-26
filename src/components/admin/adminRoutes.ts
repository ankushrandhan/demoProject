import express from "express";
import {adminController} from "./adminController";
import AdminValidator from './admin.validator';
const router = express.Router();

 router.post("/login", AdminValidator.login,adminController.login);


export { router as adminRoutes };