import { IncomeTypes } from '../../generated/prisma';
import { Decimal } from '../../generated/prisma/runtime/library';
import { prisma } from '../lib/prisma';


interface IncomeSchema {
    id: string;
    title: string;
    type: IncomeTypes;
    valor: Decimal;
    description: string;
    users_id: string;
    createdAt: Date;
    updatedAt: Date;
}



export async function transactionsIncomesRepository ( data: Omit<IncomeSchema, 'id' | 'createdAt' | 'updatedAt'> ): Promise<IncomeSchema> {
    const income = await prisma.$transaction( [
        prisma.incomes.create( {
            data: {
                title: data.title,
                type: data.type,
                valor: data.valor,
                description: data.description,
                users_id: data.users_id
            }
        } )
    ] );

    return income[0];
}