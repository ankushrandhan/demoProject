import responseMessage from '../../utils/common/responseMessage';
import httpCode from '../../utils/common/httpCode';
import {generateHash, validatePassword} from '../../utils/helpers/password';
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
    async login(data:any,headers:any) {
      const checkAdminExist: any= await db.admin.findOne({
        email: data.email,
      });
  
      if (!checkAdminExist) {
        // eslint-disable-next-line no-throw-literal
        throw {
          status: httpCode.INVALID_INPUT,
          message: responseMessage.INVALID_EMAIL,
        };
      }
      const checkPassword= await validatePassword(data.password, checkAdminExist.password);
      if (!checkPassword) {
        // eslint-disable-next-line no-throw-literal
        throw {
          status: httpCode.INVALID_INPUT,
          message: responseMessage.WRONG_PASSWORD,
        };
      }
      return checkAdminExist;
    }
    async updatePassword(data:any) {
      const checkAdminExist: any= await db.admin.findOne({
        where:{
          email: data.email,
        }
      });
  
      if (!checkAdminExist) {
        // eslint-disable-next-line no-throw-literal
        throw {
          status: httpCode.INVALID_INPUT,
          message: responseMessage.INVALID_EMAIL,
        };
      }
      const checkPassword= await validatePassword(data.password, checkAdminExist.password);
      if (!checkPassword) {
        // eslint-disable-next-line no-throw-literal
        throw {
          status: httpCode.INVALID_INPUT,
          message: responseMessage.INVALID_OLD_PASSWORD,
        };
      }
       let updateAdminPassword= await db.admin.update({
            password:data.password
       },{
         where:{
             email:data.email
         }
       });
        return updateAdminPassword;
    }
    async updateProfile(data:any){
         let updateAdminProfile= await db.admin.update({
              email:data.email,
              name:data.name
         },{
             where:{
              email:data.email
             }
         });
         return updateAdminProfile
    }
  }
  
  export default new AdminService();
  