import { Router } from 'express';
import PingController from './controllers/ping.controller';
import UserController from './controllers/user.controller';

const router = Router();

router.get('/ping', PingController.index);
router.post('/ping', PingController.postMethod);

router.get('/users', UserController.index);
router.post('/users', UserController.createUser);

export default router;
