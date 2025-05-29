import { Request, Response } from 'express';
import { AuthPayload } from '../../interfaces/auth.login.interface';
import { authLoginService } from '../../services/auth.login.service';


export async function authLoginController ( req: Request, res: Response ) {
    const { email, password }: AuthPayload = req.body;
    try {
        const loginAuth = await authLoginService( { email, password } );
        res.status( 201 ).json( loginAuth );
    } catch ( e ) {
        const typedError = e as Error;
        if ( typedError.message.includes( 'An operation failed because it depends on one or more records that were required but not found' ) ) {
            typedError.message = 'Wrong e-mail or password, if you missed your data click in recover password.';
            res.status( 403 ).send( { error: typedError.message } );
            return;
        }
        res.status( 500 ).send( { error: typedError.message } );
        return;
    }
}