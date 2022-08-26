/* eslint-disable valid-jsdoc */
import {Request, Response, NextFunction} from 'express';
import Joi from 'joi';
import BaseValidator from '../../app.validators';

/**
 * AdminValidator class containing validations for admin related validations
 */
class AdminValidator extends BaseValidator {
  login = async (req: Request, res: Response, next: NextFunction) => {
    const validationSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    this.handler(validationSchema, req, res, next);
  };
}

export default new AdminValidator();
