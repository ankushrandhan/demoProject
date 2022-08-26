
import {Request, Response, NextFunction} from 'express';
import Joi from 'joi';
import httpCode from './utils/common/httpCode';
import responseMessage from './utils/common/responseMessage';

/**
 * BaseValidator class to provide common functions to perform validation
 */
class BaseValidator {
  /**
   * Empty constructor to initialise BaseValidator object
   */
  constructor() {
  }

  /**
   * Dispatches response from the server
   *
   * @param {Joi.ObjectSchema} validator
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   * @return {Boolean} Returns true after API response is sent
   */
  async handler(
      validator: Joi.ObjectSchema,
      req: Request,
      res: Response,
      next: NextFunction,
  ) {
    try {
      const {error, value} = validator.validate(req.body);
      if (error) {
        const errorMessage = error.details.map( (x: { message: any; }) => x.message).join(', ');
        res.json({
          data: errorMessage,
          status: httpCode.VALIDATION_ERROR,
          message: responseMessage.INVALID_INPUT,
        });

        return false;
      }

      req.body = value;
      next();
    } catch (err) {
      console.log(err);
      res.json({
        status: httpCode.INTERNAL_ERROR,
        message: err,
      });
      return false;
    }
  }
}

export default BaseValidator;
