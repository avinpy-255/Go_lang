"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post('/upload-video', authMiddleware_1.isAdmin, (req, res) => {
    res.json({ message: 'Video uploaded successfully' });
});
router.delete('/delete-video', authMiddleware_1.isAdmin, (req, res) => {
    res.json({ message: 'Video deleted successfully' });
});
exports.default = router;
