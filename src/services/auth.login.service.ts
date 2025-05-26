import { AuthPayload } from '../interfaces/auth.login.interface';
import { authLoginRepository } from '../repositories/auth.login.repository';
import { createHash } from 'node:crypto';
import { sign } from 'jsonwebtoken';
import { ENV } from '../env';


interface JWTPayloadSchema {
    id: number,
    name: string,
}
export async function authLoginService ( data: AuthPayload ) {
    const { email, password } = data;
    const password_hash = createHash( 'sha512' ).update( password ).digest( 'hex' );
    const user = await authLoginRepository( { email, password_hash } );

    if ( !user || !user.id ) {
        throw new Error( 'data was not found.' );
    }

    const jwtPayload: JWTPayloadSchema = await user;
    const jsonwebtoken = sign( { jwtPayload }, ENV.JWT_SECRET, { algorithm: 'HS512', expiresIn: '60Min' } );
    return { message: 'Login successful.', token: jsonwebtoken, user: jwtPayload.id };
}