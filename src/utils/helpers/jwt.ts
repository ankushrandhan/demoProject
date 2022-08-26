import {sign} from 'jsonwebtoken';
export function generateToken(payload: any): Promise<string> {
    return new Promise((resolve) => {
      const token = sign(
          payload,
          'winter is here',
          {
            expiresIn:process.env.JWT_EXPIRE_TIME,
          },
      );
      resolve(token);
    });
  }