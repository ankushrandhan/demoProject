import express, { Request, Response } from "express";

export const handleAPIError = (res: Response, err: any) => {
  let code =
    typeof err === "object"
      ? isNaN(Number(err.code))
        ? 403
        : err.code
        ? err.code
        : 403
      : 403;
  let message =
    typeof err === "object" ? (err.message ? err.message : "") : err;
  return res.status(code).json({
    success: false,
    message: message,
    code: code,
    body: {},
  });
};
export const handleAPISuccess = (res: Response, data: any, message: string) => {
  return res.status(200).json({
    success: true,
    message: message,
    code: 200,
    body: data,
  });
};
