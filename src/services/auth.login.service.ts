import { createHash } from 'node:crypto';
import { sign } from 'jsonwebtoken';
import { ENV } from '../env';
import { AuthPayload } from '../interfaces/auth.login.interface';
import { authLoginRepository } from '../repositories/auth.login.repository';
import { JWTPayloadSchema, JWTRefreshTokenRepository } from '../interfaces/jwt.interfaces';
import { authRefreshTokenRepository } from '../repositories/auth.token.repository';

export async function authLoginService ( data: AuthPayload ) {
    const { email, password } = data;

    const password_hash = createHash( 'sha512' ).update( password ).digest( 'hex' );

    const user = await authLoginRepository( { email, password_hash } );

    if ( !user || !user.id ) {
        throw new Error( 'Invalid credentials.' );
    }

    const jwtPayload: JWTPayloadSchema = {
        id: user.id,
        name: user.name,
        email: user.email
    };

    const accessToken = sign( jwtPayload, ENV.JWT_SECRET, {
        algorithm: 'HS512',
        expiresIn: ENV.JWT_TOKEN_LIFE
    } );

    const refreshToken = sign( jwtPayload, ENV.JWT_REFRESH_SECRET, {
        expiresIn: ENV.JWT_REFRESH_LIFE
    } );

    const response: JWTRefreshTokenRepository = {
        status: 'Logged in',
        userId: jwtPayload.id,
        name: jwtPayload.name,
        email: jwtPayload.email,
        auth: {
            token: accessToken,
            refreshToken
        }
    };

    await authRefreshTokenRepository( response );

    return response;
}
