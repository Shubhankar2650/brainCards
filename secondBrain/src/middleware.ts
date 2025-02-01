import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomRequest extends Request {
    userId?: string;
}
export const middleware = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authorization = req.header("authorization")
    const decoded = jwt.verify(authorization as string, process.env.JWTSECRET as string)

    if (decoded) {
        if (typeof decoded === "string") {
            res.status(403).json({
                message: "You are not logged in"
            })
            return;
        }
        req.userId = (decoded as JwtPayload).userId;
    }
    else {
        res.status(404).json({
            message: "Login first"
        })
    }


    next()

}