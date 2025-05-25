import { Router } from 'express';
import { transactionsRoutes } from './transactions.routes';
import { authRoutes } from './login.routes';
import { validateLoginPayload } from '../middlewares/auth.middleware';

export const router = Router();


router.use( '/auth', validateLoginPayload, authRoutes );
router.use( '/transactions', transactionsRoutes );
