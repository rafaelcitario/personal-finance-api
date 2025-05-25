import { NextFunction, Request, Response } from 'express';

export function validateLoginPayload ( req: Request, res: Response, next: NextFunction ) {
    const { email, password } = req.body;

    if ( !email || !password ) {
        res.status( 400 ).send( 'Login and Password is required!' );
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ( !passwordRegex.test( password ) ) {
        res.status( 400 ).send( 'Password needs be more safety: e.g "Password@1"' );
    }

    if ( !emailRegex.test( email ) ) {
        res.status( 400 ).send( 'E-mail needs be valid e-mail.' );
    }

    next();
}