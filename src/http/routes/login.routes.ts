import { Router } from 'express';
import { authLoginController } from '../controllers/auth.login.controllers';

export const authRoutes = Router();



authRoutes.post( '/login', authLoginController );
authRoutes.post( '/register', () => { } );

