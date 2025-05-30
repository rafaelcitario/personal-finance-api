import { Request, Response } from 'express';
import { transactionIncomesService } from '../../services/transactions.service';
import { IncomesPayload } from '../../interfaces/incomePayload';

export async function transactionIncomesController ( req: Request, res: Response ): Promise<void> {
    const income: IncomesPayload = req.body;
    try {
        await transactionIncomesService( income );
        res.status( 201 ).send( 'Succefully operations' );
        return;
    } catch ( e ) {
        const typedError = e as Error;
        res.status( 500 ).send( { error: typedError.message } );
        return;
    }
}