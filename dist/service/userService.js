"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserRoleFromDb = void 0;
const user_1 = __importDefault(require("../model/user"));
const getUserRoleFromDb = async (userId) => {
    const user = await user_1.default.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return user.role;
};
exports.getUserRoleFromDb = getUserRoleFromDb;
