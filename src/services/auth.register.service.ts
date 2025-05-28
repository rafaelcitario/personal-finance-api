import { createHash } from 'node:crypto';
import { authRegisterRepository } from '../repositories/auth.register.repository';
import { RegisterPayload } from '../http/controllers/auth.register.controller';

export async function authRegisterService ( data: RegisterPayload ) {
    const { name, email, password } = data;
    if ( !name ) {
        throw new Error( 'Property name is missing at the Payload.' );
    }
    try {
        const password_hash = createHash( 'sha512' ).update( password ).digest( 'hex' );
        await authRegisterRepository( { name, email, password_hash } );
    } catch ( e ) {
        const typedError = e as Error;
        throw new Error( typedError.message );
    }
}