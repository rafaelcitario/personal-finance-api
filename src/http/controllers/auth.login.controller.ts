import { Request, Response } from 'express';
import { AuthPayload } from '../../interfaces/auth.login.interface';
import { authLoginService } from '../../services/auth.login.service';


export function authLoginController ( req: Request, res: Response ) {
    const { email, password }: AuthPayload = req.body;
    try {
        authLoginService( { email, password } );
        res.status( 200 ).send( 'The login was a success!' );
    } catch ( e ) {
        const typedError = e as Error;
        res.status( 400 ).send( { error: typedError.message } );
    }
}