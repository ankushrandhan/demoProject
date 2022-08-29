import {NextFunction} from 'express';
import {verify} from 'jsonwebtoken';
import httpCode from '../common/httpCode';
import responseMessage from '../common/responseMessage';
export function authenticateAdmin() {
    return async (req:Request, res:Response, next: NextFunction) => {
    let token;
     const payload=req.headers
    if (payload && payload.token) {
  
      const credentials = payload.token;
      token = credentials;

    } else {
      throw {
        status: httpCode.INVALID_INPUT,
        message: responseMessage.TOKEN_REQUIRE,
      };
    }
    verify(token, process.env.SECRET_KEY || "" , async (err:any, decoded:any) => {
      if (err) {
        throw {
          status: httpCode.INVALID_INPUT,
          message: responseMessage.INVALID_TOKEN,
        };
      } else {
        req.auth = decoded;
        next()
      }
    });
}
}