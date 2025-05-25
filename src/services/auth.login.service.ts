import { AuthPayload } from '../interfaces/auth.login.interface';
import { authLoginRepository } from '../repositories/auth.login.repository';
import { createHash } from 'node:crypto';

export function authLoginService ( data: AuthPayload ) {
    const { email, password } = data;
    const password_hash = createHash( 'sha512' ).update( password ).digest( 'hex' );
    authLoginRepository( { email, password_hash } );
}