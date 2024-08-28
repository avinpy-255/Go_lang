import { Request, Response } from 'express';
import User from '../models/user';

export const kickUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    if (user.role === 'super') {
      return res.status(403).send({ error: 'Cannot kick a super user' });
    }

    await User.findByIdAndDelete(userId);
    res.status(200).send({ message: 'User kicked successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to kick user' });
  }
};

export const assignAdmin = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).send({ error: 'User not found' });
      }
  
      if (user.role === 'super') {
        return res.status(403).send({ error: 'Cannot change role of a super user' });
      }
  
      user.role = 'admin';
      await user.save();
      res.status(200).send({ message: 'User assigned as admin successfully' });
    } catch (error) {
      res.status(500).send({ error: 'Failed to assign admin role' });
    }
  };
