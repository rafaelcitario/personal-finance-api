import { Router } from 'express';
import { authLoginController } from '../controllers/auth.login.controller';
import { authRegisterController } from '../controllers/auth.register.controller';

export const authRoutes = Router();



authRoutes.post( '/login', authLoginController );
authRoutes.post( '/register', authRegisterController );

