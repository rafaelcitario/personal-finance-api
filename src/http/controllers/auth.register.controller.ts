import { Request, Response } from 'express';
import { AuthPayload } from '../../interfaces/auth.login.interface';
import { authRegisterService } from '../../services/auth.register.service';


export type RegisterPayload = Required<AuthPayload & { name: string; }>;
export async function authRegisterController ( req: Request, res: Response ) {
    const { name, email, password }: RegisterPayload = req.body;
    try {
        await authRegisterService( { name, email, password } );
        res.status( 200 ).send( 'Register was a success!' );
    } catch ( e ) {
        const typedError = e as Error;
        if ( typedError.message.includes( 'Unique constraint failed on the fields: (`email`)' ) ) {
            typedError.message = 'Unavailable e-mail';
            res.status( 401 ).send( { error: typedError.message } );
            return;
        }
        res.status( 500 ).send( { error: typedError.message } );
        return;
    }
}