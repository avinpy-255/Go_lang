import { Router } from 'express';
import { uploadVideo, deleteVideo, getVideos } from '../controllers/videoController';
import authMiddleware from '../middleware/authMiddleware';
import roleMiddleware from '../middleware/roleMiddleware';

const router = Router();

router.post('/upload', authMiddleware, roleMiddleware(['admin', 'super'] ), uploadVideo);
router.delete('/:id', authMiddleware, roleMiddleware(['admin', 'super']), deleteVideo);
router.get('/', authMiddleware, getVideos);

export default router;
