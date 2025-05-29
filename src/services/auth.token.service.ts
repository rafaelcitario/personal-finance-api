import { sign, verify } from 'jsonwebtoken';
import { ENV } from '../env';
import { authRefreshTokenRepository } from '../repositories/auth.token.repository';

export async function authRefreshTokenService ( auth: string ) {
    if ( !auth || !auth.startsWith( 'Bearer ' ) ) {
        throw new Error( 'Refresh token missing or malformed.' );
    }

    try {
        const token = auth.split( ' ' )[1];
        const decoded = verify( token, ENV.JWT_REFRESH_SECRET ) as {
            email: string,
            id: string,
            name: string;
        };

        if ( !decoded || !decoded.id ) {
            throw new Error( 'Invalid payload.' );
        }

        const { email, id, name } = decoded;

        const newAccessToken = sign( { id, name, email }, ENV.JWT_SECRET, {
            algorithm: 'HS512',
            expiresIn: ENV.JWT_TOKEN_LIFE
        } );

        const newRefreshToken = sign( { id, name, email }, ENV.JWT_REFRESH_SECRET, {
            expiresIn: ENV.JWT_REFRESH_LIFE
        } );

        const response = {
            userId: id,
            email,
            auth: {
                token: newAccessToken,
                refreshToken: newRefreshToken
            }
        };

        await authRefreshTokenRepository( response );
        return response;

    } catch {
        throw new Error( 'Invalid token or expired.' );
    }
}