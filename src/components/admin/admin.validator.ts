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

    this.handler(validationSchema, req, res, next);
  };
  userRegistered = async (req: Request, res: Response, next: NextFunction) => {
    const validationSchema = Joi.object({
      firstname: Joi.string().required(),
      lastname:Joi.string().required(),
      designation:Joi.string().required(),
      email: Joi.string().email().required(),
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

    this.handler(validationSchema, req, res, next);
  };
  updateProfileUser = async (req: Request, res: Response, next: NextFunction) => {
    const validationSchema = Joi.object({
      firstname: Joi.string().email().required(),
      lastname: Joi.string().required(),
      designation: Joi.string().required(),
      
    });

    this.handler(validationSchema, req, res, next);
  };
  changePassword = async (req: Request, res: Response, next: NextFunction) => {
    const validationSchema = Joi.object({
      oldPassword: Joi.string().email().required(),
      password: Joi.string()
      .regex(RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/))
      .min(8)
      .required()
      .messages(
          {
            'string.pattern.base': 'Password should have atleast one lowercase letter, one capital letter, one number and one special character.',
          },
      ),
      confirmPassword: Joi.any().equal(Joi.ref('password'))
      .required()
      .label('Confirm password')
      .messages({ 'any.only': '{{#label}} does not match' })

    });

    this.handler(validationSchema, req, res, next);
  };
  updateProfile = async (req: Request, res: Response, next: NextFunction) => {
    const validationSchema = Joi.object({
      name: Joi.string().email().required(),
      email: Joi.string().required(),
    });
    this.handler(validationSchema, req, res, next);
  };
}

export default new AdminValidator();
