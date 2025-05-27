import { Request, Response } from 'express';
import { authRefreshTokenService } from '../../services/auth.token.service';

export async function authTokenController ( req: Request, res: Response ) {
    const authorization = req.headers['authorization'] ?? '';
    try {
        await authRefreshTokenService( authorization );
        res.status( 201 ).send( 'Refresh token succesfuly saved!' );
    } catch ( e ) {
        const typedError = e as Error;
        res.status( 500 ).send( { error: typedError.message } );
    }
}