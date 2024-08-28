// types.d.ts
import { UserDocument } from './models/User'; // Assuming you have a User model or a type for the user object
import express from 'express';

declare global {
  namespace Express {
    interface Request {
        user?: any;// or any other type that matches your user object
    }
  }
}