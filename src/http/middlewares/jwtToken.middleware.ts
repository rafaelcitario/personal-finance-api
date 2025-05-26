import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ENV } from '../../env';
export function jwtTokenVerify ( req: Request, res: Response, next: NextFunction ) {
    const auth = req.headers['authorization'] ?? '';

    if ( !auth.startsWith( 'Bearer ' ) ) {
        res.status( 401 ).send( {
            message: 'Unauthorized token: wrong format or missing "Bearer" prefix.'
        } );
    }

    const token = auth.split( ' ' )[1];

    try {
        const decoded = jwt.verify( token, ENV.JWT_SECRET );
        req.jwtPayload = decoded;
        next();
    } catch ( e ) {
        const typedError = e as Error;
        res.status( 401 ).send( {
            message: 'Invalid or expired token.',
            error: typedError
        } );
    }
}
