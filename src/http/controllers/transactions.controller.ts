import { Request, Response } from 'express';
import { createTransactionService, deleteTransactionService, listTransactionService, updateTransactionService } from '../../services/transactions.service';
import { IncomesPayload } from '../../interfaces/incomePayload';

export async function createIncomeController ( req: Request, res: Response ) {
    const income: IncomesPayload = req.body;

    try {
        await createTransactionService( { ...income, ownerId: req.jwtPayload.id } );
        res.status( 201 ).send( 'Created successfully.' );
    } catch ( e ) {
        const error = e as Error;
        res.status( 500 ).send( { error: error.message } );
    }
}

export async function listIncomesController ( req: Request, res: Response ) {
    try {
        const list = await listTransactionService( { ownerId: req.jwtPayload.id } );
        res.status( 200 ).json( list );
    } catch ( e ) {
        const error = e as Error;
        res.status( 500 ).send( { error: error.message } );
    }
}

export async function getIncomeByIdController ( req: Request, res: Response ) {
    try {
        const income = await listTransactionService( { id: req.params.id, ownerId: req.jwtPayload.id } );
        res.status( 200 ).json( income );
    } catch ( e ) {
        const error = e as Error;
        res.status( 500 ).send( { error: error.message } );
    }
}

export async function updateIncomeController ( req: Request, res: Response ) {
    const income: IncomesPayload = req.body;

    try {
        await updateTransactionService( { ...income, id: req.params.id, ownerId: req.jwtPayload.id } );
        res.status( 200 ).send( 'Successfully updated.' );
    } catch ( e ) {
        const error = e as Error;
        res.status( 500 ).send( { error: error.message } );
    }
}

export async function deleteIncomeController ( req: Request, res: Response ) {
    try {
        await deleteTransactionService( { id: req.params.id, ownerId: req.jwtPayload.id } );
        res.status( 200 ).send( 'Successfully deleted.' );
        return;
    } catch ( e ) {
        const error = e as Error;
        res.status( 500 ).send( { error: error.message } );
    }
}
