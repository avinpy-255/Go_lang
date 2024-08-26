import { NextFunction, Request, Response } from "express";
import kinde from '../kindeConfig'

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
    
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  };