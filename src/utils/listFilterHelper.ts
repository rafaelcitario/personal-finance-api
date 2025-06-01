import { findTransactionSchema } from '../repositories/transactions.repository';

export function buildTransactionWhereClause ( data: findTransactionSchema & Partial<{
    startDate: string,
    endDate: string,
    type: string;
}> ): object {
    return {
        users_id: data.users_id,
        ...( data.type && { type: data.type } ),
        ...( data.startDate || data.endDate
            ? {
                createdAt: {
                    ...( data.startDate && { gte: new Date( `${data.startDate}T00:00:00.000Z` ) } ),
                    ...( data.endDate && { lte: new Date( new Date( `${data.endDate}T00:00:00.000Z` ).getTime() + 24 * 60 * 60 * 1000 ) } ),
                },
            }
            : {} ),
    };
}