import { handleAPISuccess, handleAPIError } from "../../utils/functions";
import { Request, Response } from "express";
import userService from './user.service';
const db = require("../../models/index");
import responseMessage from '../../utils/common/responseMessage';
import {generateToken} from '../../utils/helpers/jwt';
import UserSessionService from '../user-session/user-session-service';
import {generateHash} from "../../utils/password";
class UsersController {
  /**
   * Function to login a admin
   * @param  {Request} object  - request conatin the email, password and header information
   */
  async register(req: Request, res: Response) {
    try {
     const {...data} = req.body
     const {...headers}=req.headers
     data.password = await generateHash(data.password);
     const addUser = await userService.register(data);

     const token = await generateToken({
      email:addUser.email,
      id:addUser.id,
      timeStamps:Math.floor(Date.now() / 1000)

     });

     // save sales agent session
     await UserSessionService.add({
      userId: addUser.id,
      device_token: token,
      status: 'active',
      device_id:headers.device_id,
      activated_at: new Date().toISOString(),
    });
    addUser.token=token
      return handleAPISuccess(res, addUser, responseMessage.LOGGED_IN)
    } catch (err) {
      return handleAPIError(res, err);
    }
  }
}

export const userController = new UsersController();
