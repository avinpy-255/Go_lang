import { Request, Response } from "express";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import User from "../models/user";

export const register = async (req: Request, res: Response) => {
    try {
      const { username, password, role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, password: hashedPassword, role });
      await user.save();
      res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).send({ error: 'Registration failed' });
    }
  };
  
  export const login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).send({ error: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send({ error: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET || '', {
        expiresIn: '1h',
      });
  
      res.send({ token });
    } catch (error) {
      res.status(500).send({ error: 'Login failed' });
    }
  };
  
