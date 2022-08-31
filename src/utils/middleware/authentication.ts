import {NextFunction} from "express";
import {verify} from "jsonwebtoken";
import httpCode from "../common/httpCode";
import responseMessage from "../common/responseMessage";
import {handleAPIError} from "../functions";
export function authenticateAdmin() {
    return async (req: any,res: any, next: NextFunction) => {
        try {
            let token;
            const payload = req.headers;

            if (payload && payload.authorization) {
                const credentials = payload.authorization;
                token = credentials;
            } else {
                throw {
                    status: httpCode.INVALID_INPUT,
                    message: responseMessage.TOKEN_REQUIRE,
                };
            }
            await verify(token, process.env.SECRET_KEY || "", async (err: any, decoded: any) => {
                if (err) {
                    throw {
                        status: httpCode.INVALID_INPUT,
                        message: responseMessage.INVALID_TOKEN,
                    };
                } else {
                    req.auth = decoded;
                    next();
                }
            });
        } catch (err) {
            return handleAPIError(res, err);
        }
    };
    
}
