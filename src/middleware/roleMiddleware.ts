import { NextFunction, Request, Response } from 'express';

export const roleMiddleware = (requiredRole: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
  
  };
};