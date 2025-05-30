import { IncomesPayload } from '../interfaces/incomePayload';
import { transactionsIncomesRepository } from '../repositories/transactions.repository';
import { incomeValorFormatCurrency } from '../utils/formatCurrency';
import { incomeTypesCheck } from '../utils/incomeTypeChecker';

export async function transactionIncomesService ( income: IncomesPayload ) {
    const isIncomeTypeValid = incomeTypesCheck( income.type );
    if ( !income.ownerId || typeof income.ownerId != 'string' || !income.type || !isIncomeTypeValid || !Number.isInteger( income.valor ) ) {
        throw new Error( 'Invalid Payload' );
    }


    try {
        const incomeCurrency = incomeValorFormatCurrency( income.valor );
        await transactionsIncomesRepository( {
            title: income.title,
            valor: incomeCurrency,
            type: income.type,
            users_id: income.ownerId,
            description: income.description ?? 'whithout description'
        } );
    } catch ( e ) {
        const typedError = e as Error;
        throw new Error( typedError.message );
    }
}