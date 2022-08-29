import express from "express";
import {adminController} from "./admin.controller";
import AdminValidator from './admin.validator';
import {authenticateAdmin} from '../../utils/middleware/authentication'
const router = express.Router();

 router.post("/login", AdminValidator.login,adminController.login);
 router.post("/user-registered",AdminValidator.userRegistered,adminController.register);
 router.put("/user-updateProfile", AdminValidator.updateProfileUser,adminController.updateProfileUser);
 router.put("/change-password", AdminValidator.changePassword,adminController.changePassword);
 router.put("/update-profile", AdminValidator.updateProfile,adminController.updateProfile);
export {router as adminRoutes};