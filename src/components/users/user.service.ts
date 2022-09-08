import responseMessage from "../../utils/common/responseMessage";
import httpCode from "../../utils/common/httpCode";
import { handleAPIError } from "../../utils/functions";
import { compareSync } from "bcryptjs";
const db = require("../../models/index");
/**
 * AdminService class acting as a layer above the DB layer.
 * Provides a layer of abstraction between the UserModel and the AdminController.
 * Functions exposed include :-
 * 1) list()   - lists admin
 */
class UserService {
  /**
   * Function to list admins
   * @return {object} data - object containing the count and result as the array of objects
   */

  /**
     * Function to approve disapprove sale agent
  
     * @param  {object} data -data included the information regarding admin like email and password
     * @return {object} data - object containing the information of admin
     */
  async register(data: any, res: any) {
    const checkUserExist: any = await db.users.findOne({
      where: {
        email: data.email,
      },
      raw: true,
    });
    console.log('--------------register')
    if (checkUserExist) {
      // eslint-disable-next-line no-throw-literal
      throw {
        status: httpCode.INVALID_INPUT,
        message: responseMessage.EMAIL_ALREADY_EXIST,
      };
    }
    const createUser = await db.users.create(data);
    return createUser;
  }
  async updateProfile(data: any) {
    try {
      const checkUserExist: any = await db.users.findOne({
        where: {
          id: data.id,
        },
        raw: true,
      });
      if (!checkUserExist) {
        // eslint-disable-next-line no-throw-literal
        throw {
          status: httpCode.INVALID_INPUT,
          message: responseMessage.INVALID_USER_ID,
        };
      }
      const updateDetails = await db.users.update(data, {
        where: {
          id: data.id,
        },
      });
      return updateDetails;
    } catch (err: any) {
      console.log(err);
    }
  }
}
export default new UserService();
