import { Request, Response } from 'express';
import { authRefreshTokenService } from '../../services/auth.token.service';

export async function authTokenController ( req: Request, res: Response ) {
    const authorization = req.headers['authorization'] ?? '';
    try {
        const data = await authRefreshTokenService( authorization );
        res.status( 201 ).json( {
            message: 'Refresh token successfully generated.',
            user: {
                id: data.userId,
                email: data.email
            },
            auth: data.auth
        } );
    } catch ( e ) {
        res.status( 500 ).json( { error: ( e as Error ).message } );
    }
}