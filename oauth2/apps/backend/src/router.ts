import Router from 'express';
import Auth from './controller/auth-controller'

// @ts-ignore
const router = new Router();

router.post('/vk', Auth.vk);
router.post('/github', Auth.github);
router.post('/google', Auth.google);

export default router;
