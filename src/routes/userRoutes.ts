import { Router } from 'express';
import { kickUser, assignAdmin } from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';
import roleMiddleware from '../middleware/roleMiddleware';

const router = Router();

router.delete('/kick/:id', authMiddleware, roleMiddleware(['super']), kickUser);
router.patch('/assign-admin/:id', authMiddleware, roleMiddleware(['super']), assignAdmin);

export default router;
