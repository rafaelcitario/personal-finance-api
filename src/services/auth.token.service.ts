import { verify } from 'jsonwebtoken';
import { ENV } from '../env';
import { authRefreshTokenRepository } from '../repositories/auth.token.repository';

export async function authRefreshTokenService ( auth: string ) {
    if ( !auth || !auth.startsWith( 'Bearer ' ) ) {
        throw new Error( 'Refresh token missing or malformed.' );
    }

    try {
        const token = auth.split( ' ' )[1];
        const decoded = verify( token, ENV.JWT_REFRESH_SECRET ) as { email: string, id: string; };
        const { email, id } = decoded;
        await authRefreshTokenRepository( { email, id, token } );
    } catch {
        throw new Error( 'Invalid token or expired.' );
    }
}