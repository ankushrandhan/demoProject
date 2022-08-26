/* eslint-disable valid-jsdoc */
import {Request, Response, NextFunction} from 'express';
import Joi from 'joi';
import BaseValidator from '../../app.validators';

/**
 * UserValidator class containing validations for user related validations
 */
class UserValidator extends BaseValidator {
  register = async (req: Request, res: Response, next: NextFunction) => {
    
    const validationSchema = Joi.object({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      email: Joi.string().email().required(),
      designation: Joi.string().required(),
      password: Joi.string()
          .regex(RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/))
          .min(8)
          .required()
          .messages(
              {
                'string.pattern.base': 'Password should have atleast one lowercase letter, one capital letter, one number and one special character.',
              },
          ),
    });
  //  console.log("innnnnnnnnnnnnnnnnnnnnnn");return
    this.handler(validationSchema, req, res, next);
  };
}

export default new UserValidator();
