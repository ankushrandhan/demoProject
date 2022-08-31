import express, { NextFunction } from 'express';
import {adminController} from './admin.controller';
import AdminValidator from './admin.validator';
import {authenticateAdmin} from '../../utils/middleware/authentication'
const router = express.Router();

 router.post("/login", AdminValidator.login,adminController.login);
 router.post("/user-registered", authenticateAdmin(), AdminValidator.userRegistered,adminController.register);
 router.put("/user-updateProfile",authenticateAdmin(), AdminValidator.updateProfileUser,adminController.updateProfileUser);
 router.put("/change-password",authenticateAdmin(), AdminValidator.changePassword,adminController.changePassword);
 router.put("/update-profile", authenticateAdmin(),AdminValidator.updateProfile,adminController.updateProfile);
export {router as adminRoutes};