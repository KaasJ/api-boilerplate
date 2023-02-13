import { Router } from 'express';
import { sayHi } from './news/controller';

// setup with multiple routes

const router = Router();

router.get('/', sayHi);

export default router;