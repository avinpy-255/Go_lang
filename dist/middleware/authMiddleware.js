"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUser = exports.isAdmin = exports.isSuperAdmin = exports.attachUserRole = void 0;
const userService_1 = require("../service/userService");
// Middleware to attach the user role to the request
const attachUserRole = async (req, res, next) => {
    try {
        const userId = req.auth?.userId;
        if (userId) {
            const role = await (0, userService_1.getUserRoleFromDb)(userId); // Fetch the role from MongoDB
            if (role) {
                // Cast the auth object to include userRole
                req.auth.userRole = role;
            }
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.attachUserRole = attachUserRole;
// Middleware to check if the user is a super admin
const isSuperAdmin = (req, res, next) => {
    if (req.auth?.userRole === 'super-admin') {
        return next();
    }
    return res.status(403).json({ error: 'Forbidden: Requires Super Admin access' });
};
exports.isSuperAdmin = isSuperAdmin;
// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
    if (req.auth?.userRole === 'admin' || req.auth?.userRole === 'super-admin') {
        return next();
    }
    return res.status(403).json({ error: 'Forbidden: Requires Admin access' });
};
exports.isAdmin = isAdmin;
// Middleware to allow regular users to access routes
const isUser = (req, res, next) => {
    if (req.auth?.userRole === 'user') {
        return next();
    }
    return res.status(403).json({ error: 'Forbidden: Requires User access' });
};
exports.isUser = isUser;
