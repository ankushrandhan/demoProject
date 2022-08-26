import express from "express";
import {userController} from "./user.controller";
import UserValidator from './user.validator';
const router = express.Router();

 router.post("/register", UserValidator.register,userController.register);


export { router as userRoutes };