import { IncomeFindPayload, IncomesPayload } from '../interfaces/incomePayload';
import { createTransactionRepository, CreateTransactionSchema, deleteTransactionRepository, findTransactionRepository, listTransactionRepository, updateTransactionRepository } from '../repositories/transactions.repository';
import { incomeValorFormatCurrency } from '../utils/formatCurrency';
import { incomeTypesCheck } from '../utils/incomeTypeChecker';

export async function createTransactionService ( income: IncomesPayload ): Promise<void> {
    const isIncomeTypeValid = incomeTypesCheck( income.type );
    if ( !income.ownerId || typeof income.ownerId != 'string' || !income.type || !isIncomeTypeValid || !Number.isInteger( income.amount ) ) {
        throw new Error( 'Invalid Payload' );
    }


    try {
        const incomeCurrency = incomeValorFormatCurrency( income.amount );
        await createTransactionRepository( {
            title: income.title,
            amount: incomeCurrency,
            type: income.type,
            users_id: income.ownerId,
            description: income.description ?? 'whithout description'
        } );
    } catch ( e ) {
        const typedError = e as Error;
        throw new Error( typedError.message );
    }
}

export async function updateTransactionService ( income: IncomesPayload ): Promise<void> {
    if ( !income.ownerId || typeof income.ownerId != 'string' || !income.id || typeof income.id != 'string' ) {
        throw new Error( 'Invalid Payload' );
    }
    try {
        const incomeCurrency = incomeValorFormatCurrency( income.amount );
        await updateTransactionRepository( {
            id: income.id,
            users_id: income.ownerId,
            title: income.title,
            type: income.type,
            amount: incomeCurrency,
            description: income.description
        } );
        return;
    } catch ( e ) {
        const typedError = e as Error;
        throw new Error( typedError.message );
    }
}

export async function listTransactionService ( income: IncomeFindPayload ): Promise<CreateTransactionSchema[] | CreateTransactionSchema> {
    if ( !income.ownerId || typeof income.ownerId != 'string' ) {
        throw new Error( 'Invalid Payload' );
    }


    if ( !income.id || typeof income.id != 'string' ) {
        return await listTransactionRepository( {
            users_id: income.ownerId
        } );
    }

    return await findTransactionRepository( {
        id: income.id,
        users_id: income.ownerId
    } );
}

export async function deleteTransactionService ( income: IncomeFindPayload ): Promise<void> {
    if ( !income.ownerId || typeof income.ownerId != 'string' || !income.id || typeof income.id != 'string' ) {
        throw new Error( 'Invalid Payload.' );
    }

    await deleteTransactionRepository( {
        id: income.id,
        users_id: income.ownerId
    } );
    return;
}