"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.get('/watch-video', authMiddleware_1.isUser, (req, res) => {
    res.json({ message: 'Enjoy watching the video' });
});
exports.default = router;
