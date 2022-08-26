import { handleAPISuccess, handleAPIError } from "../../utils/functions";
import { Request, Response } from "express";
import adminService from './admin.service';
const db = require("../../models/index");
import responseMessage from '../../utils/common/responseMessage';
import {generateToken} from '../../utils/helpers/jwt';
import AdminSessionService from '../admin-session/admin-session-service';
class AdminController {
  /**
   * Function to login a admin
   * @param  {Request} object  - request conatin the email, password and header information
   */
  async login(req: Request, res: Response) {
    try {
     const {...data} = req.body
     const {...headers}=req.headers
      const checkAdmin= await adminService.login(data,headers)
       const token= await generateToken({
          email:checkAdmin.email,
          id:checkAdmin.id,
          timeStamps:Math.floor(Date.now() / 1000)
        });

      await AdminSessionService.add({
        userId: checkAdmin.id,
        device_token: token,
        status: 'active',
        device_id:headers.device_id,
        activated_at: new Date().toISOString(),
      });
      checkAdmin.token=token
      return handleAPISuccess(res, checkAdmin, responseMessage.LOGGED_IN)
    } catch (err) {
      return handleAPIError(res, err);
    }
  }
}

export const adminController = new AdminController();
