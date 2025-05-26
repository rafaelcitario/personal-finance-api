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
        res.status( 500 ).send( { error: typedError.message } );
    }
}