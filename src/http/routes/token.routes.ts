import { Router } from 'express';
import { authTokenController } from '../controllers/auth.token.controller';

export const tokenRoutes = Router();
tokenRoutes.post( '/', authTokenController );