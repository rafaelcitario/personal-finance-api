import { Request, Response } from 'express';
import { AuthPayload } from '../../interfaces/auth.login.interface';
import { authRegisterService } from '../../services/auth.register.service';


export type RegisterPayload = Required<AuthPayload & { name: string; }>;
export function authRegisterController ( req: Request, res: Response ) {
    const { name, email, password }: RegisterPayload = req.body;
    try {
        authRegisterService( { name, email, password } );
        res.status( 200 ).send( 'Register was a success!' );
    } catch ( e ) {
        const typedError = e as Error;
        res.status( 500 ).send( { error: typedError } );
    }
}