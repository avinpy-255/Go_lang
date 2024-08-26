import express from 'express';
import { kickUser, selectAdmin } from '../controllers/supeController';
import { authMiddleware } from '../middleware/authMiddleware';
import { roleMiddleware } from '../middleware/roleMiddleware';

const router = express.Router();

console.log("Starting");

router.use(authMiddleware);
router.use(roleMiddleware('super'));

router.post('/kick-user', kickUser);
router.post('/select-admin', selectAdmin);

export default router;