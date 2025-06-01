import { IncomeTypes } from '../../generated/prisma';
import { Decimal } from '../../generated/prisma/runtime/library';
import { prisma } from '../lib/prisma';
import { buildTransactionWhereClause } from '../utils/listFilterHelper';


export interface CreateTransactionSchema {
    id: string;
    title: string;
    type: IncomeTypes;
    amount: Decimal;
    description: string;
    users_id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface findTransactionSchema {
    id?: string;
    users_id: string;
}


export async function createTransactionRepository ( data: Omit<CreateTransactionSchema, 'id' | 'createdAt' | 'updatedAt'> ): Promise<CreateTransactionSchema> {
    try {
        const income = await prisma.$transaction( [
            prisma.incomes.create( {
                data: {
                    title: data.title,
                    type: data.type,
                    amount: data.amount,
                    description: data.description,
                    users_id: data.users_id
                }
            } )
        ] );

        return income[0];
    } catch ( e ) {
        const typedError = e as Error;
        throw new Error( typedError.message );
    }
}
export async function updateTransactionRepository ( data: Partial<CreateTransactionSchema> ): Promise<CreateTransactionSchema> {
    try {
        const updatedIncome = await prisma.$transaction( [
            prisma.incomes.update( {
                where: {
                    id: data.id,
                    users_id: data.users_id
                },
                data: {
                    title: data.title,
                    type: data.type,
                    amount: data.amount,
                    description: data.description,
                }
            } )
        ] );

        return updatedIncome[0];
    } catch ( e ) {
        const typedError = e as Error;
        throw new Error( typedError.message );
    }
}

export async function listTransactionRepository (
    data: findTransactionSchema & Partial<{
        startDate: string,
        endDate: string,
        type: string;
    }>
): Promise<CreateTransactionSchema[]> {
    try {
        const where = buildTransactionWhereClause( data );

        const listOfIncomes = await prisma.incomes.findMany( { where } );

        return listOfIncomes;
    } catch ( e ) {
        throw new Error( ( e as Error ).message );
    }
}


export async function findTransactionRepository ( data: findTransactionSchema ) {
    try {
        const findIncome = await prisma.incomes.findFirstOrThrow( {
            where: {
                id: data.id,
                users_id: data.users_id
            }
        } );

        return findIncome;
    } catch ( e ) {
        const typedError = e as Error;
        throw new Error( typedError.message );
    }
}

export async function deleteTransactionRepository ( data: findTransactionSchema ): Promise<void> {
    try {
        await prisma.incomes.delete( {
            where: {
                id: data.id,
                users_id: data.users_id
            }
        } );
        return;
    } catch ( e ) {
        const typedError = e as Error;
        throw new Error( typedError.message );
    }
};