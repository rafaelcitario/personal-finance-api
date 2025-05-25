import { createHash } from 'node:crypto';
import { authRegisterRepository } from '../repositories/auth.register.repository';
import { RegisterPayload } from '../http/controllers/auth.register.controller';

export function authRegisterService ( data: RegisterPayload ) {
    const { name, email, password } = data;
    const password_hash = createHash( 'sha512' ).update( password ).digest( 'hex' );
    authRegisterRepository( { name, email, password_hash } );
}