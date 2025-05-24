import { Router } from 'express';
import { transactionsRoutes } from './transactions.routes';
import { authRoutes } from './login.routes';

export const router = Router();


router.use( '/login', authRoutes );
router.use( '/register', authRoutes );
router.use( '/transactions', transactionsRoutes );
