"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['super-admin', 'admin', 'user'], default: 'user', required: true },
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
