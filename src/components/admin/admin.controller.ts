import { handleAPISuccess, handleAPIError } from "../../utils/functions";
import { Request, Response } from "express";
import adminService from "./admin.service";
const db = require("../../models/index");
import responseMessage from "../../utils/common/responseMessage";
import { generateToken } from "../../utils/helpers/jwt";
import AdminSessionService from "../admin-session/admin-session-service";
import {generateHash} from "../../utils/password";
import userService from "../users/user.service";
import UserSessionService from "../user-session/user-session-service";
class AdminController {
  /**
   * Function to login a admin
   * @param  {Request} object  - request conatin the email, password and header information
   */
  async login(req: Request, res: Response) {
    try {
      const {...data} = req.body;
      const {...headers} = req.headers;
      const checkAdmin = await adminService.login(data, headers);
      const token = await generateToken({
        email: checkAdmin.email,
        id: checkAdmin.id,
        timeStamps: Math.floor(Date.now() / 1000),
      });

      await AdminSessionService.add({
        userId: checkAdmin.id,
        device_token: token,
        status: "active",
        device_id: headers.device_id,
        activated_at: new Date().toISOString(),
      });
      checkAdmin.token = token;
      return handleAPISuccess(res, checkAdmin, responseMessage.LOGGED_IN);
    } catch (err) {
      return handleAPIError(res, err);
    }
  }
  /**
   * Function to login a admin
   * @param  {Request} object  - request conatin the email, password and header information
   */
  async register(req: Request, res: Response) {
    try {
      const {...data} = req.body;
      const {...headers} = req.headers;
      data.password = await generateHash(data.password);
      const addUser = await userService.register(data,res);

      const token = await generateToken({
        email: addUser.email,
        id: addUser.id,
        timeStamps: Math.floor(Date.now() / 1000),
      });

      // save sales agent session
      await UserSessionService.add({
        userId: addUser.id,
        device_token: token,
        status: "active",
        device_id: headers.device_id,
        activated_at: new Date().toISOString(),
      });
      addUser.token = token;
      return handleAPISuccess(res, addUser, responseMessage.LOGGED_IN);
    } catch (err) {
      return handleAPIError(res, err);
    }
  }
  /**
   * Function to login a admin
   * @param  {Request} object -request conatin the firstName,lastName etc.
   */
  async updateProfileUser(req: Request, res: Response) {
    try {
      const {...data} = req.body;
      await userService.updateProfile(data);
      return handleAPISuccess(res, {}, responseMessage.PROFILE_UPDATE);
    } catch (err) {
      return handleAPIError(res, err);
    }
  }
  async changePassword(req:Request,res:Response){
    try{
    const {...data}= req.body;
    data.password = await generateHash(data.password);
      await adminService.updatePassword(data)
    return handleAPISuccess(res, {}, responseMessage.PASSWORD_UPDATED);
    }catch(err){
      return handleAPIError(res, err);
    }
  }
  async updateProfile(req:Request,res:Response){
    const {...data} = req.body;
    await adminService.updateProfile(data);
    return handleAPISuccess(res, {}, responseMessage.PROFILE_UPDATE);
  }
}

export const adminController = new AdminController();
