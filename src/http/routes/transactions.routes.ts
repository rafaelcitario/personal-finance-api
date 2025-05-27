import { Request, Response, Router } from 'express';

export const transactionsRoutes = Router();


function handler ( req: Request, res: Response ) {
    res.send( req.jwtPayload );
}

transactionsRoutes.post( '/incomes', handler );
transactionsRoutes.get( '/incomes', handler );
transactionsRoutes.put( '/income/{:id}', handler );
transactionsRoutes.get( '/income/{:id}', handler );
transactionsRoutes.delete( '/income/{:id}', handler );

