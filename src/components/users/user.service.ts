import responseMessage from "../../utils/common/responseMessage";
import httpCode from "../../utils/common/httpCode";
const db = require("../../models/index");
/**
 * AdminService class acting as a layer above the DB layer.
 * Provides a layer of abstraction between the UserModel and the AdminController.
 * Functions exposed include :-
 * 1) list()   - lists admin
 */
class AdminService {
  /**
   * Function to list admins
   * @param  {Object} search  - search admin based on given keywords
   * @param  {Array} conditions - includes conditions to filter out admin in the form of an object
   * @param  {Array} filters - includes filters for object
   * @param  {Array} foreignFields - object of foreignFields to be populated with the model
   * @param  {number} page - page number, if page is null, no pagination gets applied
   * @param  {number} limit - page size in the pagination.
   * @param  {String} sort - Model field to be used in sorting
   * @param  {String} order - Sorting order (asc/ desc)
   * @return {object} data - object containing the count and result as the array of objects
   */

  /**
     * Function to approve disapprove sale agent
  
     * @param  {object} data -data included the information regarding admin like email and password
     * @return {object} data - object containing the information of admin
     */
  async register(data: any) {
    const checkUserExist: any = await db.users.findOne({
      email: data.email,
    });

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
}

export default new AdminService();
