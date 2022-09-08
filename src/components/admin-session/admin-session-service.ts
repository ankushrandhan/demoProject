const db = require("../../models/index");
/**
 * AdminSession Service class acting as a layer above the DB layer.
 * Provides a layer of abstraction between the UserModel and the AdminController.
 * Functions exposed include :-
 * 1) list()   - lists admin
 */
 class AdminSessionService {
    /**
     * Function to add  admins sessions
     * @return {object} data - object containing the count and result as the array of objects
     */


    /**
     * Function to approve disapprove sale agent
  
     * @param  {object} data -data included the information regarding admin like email and password
     * @return {object} data - object containing the information of admin
     */
    async add(data:any) {
         let addSession= await db.admin_sessions.create(data);
         return addSession
    }
  }
  
  export default new AdminSessionService();
  