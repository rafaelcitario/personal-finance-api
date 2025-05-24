import { Router } from 'express';

export const authRoutes = Router();

function handler () { }

authRoutes.post( '/auth', handler );
authRoutes.post( '/register', handler );

