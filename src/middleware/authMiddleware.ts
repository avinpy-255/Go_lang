import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken")
import User from "../models/user"

interface AuthRequest extends Request {
    user?: any
}

const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const token =  req.header('Authorization')?.replace('Bearer' , '')
    if(!token){
        return res.status(401).json({ message: 'Access denied. No token provided.' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '') as any;
        const user = await User.findById(decoded._id)
        if (!user) {
            return res.status(401).send({ error: 'User not found' });
          }
          req.user = user;
          next();
        } catch (error) {
          res.status(401).send({ error: 'Invalid token' });
        }
    }

export default authMiddleware;