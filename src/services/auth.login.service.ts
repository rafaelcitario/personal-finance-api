import { AuthPayload } from '../interfaces/auth.login.interface';
import { authLoginRepository } from '../repositories/auth.login.repository';
import { createHash } from 'node:crypto';
import { sign } from 'jsonwebtoken';
import { ENV } from '../env';


export interface JWTPayloadSchema {
    id: number,
    name: string,
    email: string;
}
export async function authLoginService ( data: AuthPayload ) {
    const { email, password } = data;
    const password_hash = createHash( 'sha512' ).update( password ).digest( 'hex' );
    const user = await authLoginRepository( { email, password_hash } );

    if ( !user || !user.id ) {
        throw new Error( 'data was not found.' );
    }

    const jwtPayload: JWTPayloadSchema = await user;
    const token = sign( jwtPayload, ENV.JWT_SECRET, { algorithm: 'HS512', expiresIn: ENV.JWT_TOKEN_LIFE } );
    const refreshToken = sign( jwtPayload, ENV.JWT_REFRESH_SECRET, { expiresIn: ENV.JWT_REFRESH_LIFE } );
    const response = {
        status: 'Logged in',
        userId: jwtPayload.id,
        name: jwtPayload.name,
        email: jwtPayload.email,
        auth: {
            token,
            refreshToken,
        }
    };
    return response;
}