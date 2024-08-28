import { Request, Response, NextFunction } from 'express';

const roleMiddleware = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Ensure req.user exists and has a role
    const user = req.user as { role: string }; // Adjust based on your user type

    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ error: 'Access denied' });
    }
    // If the role matches, proceed to the next middleware/route
    next();
  };
};

export default roleMiddleware;