import { IncomeTypes } from '../../generated/prisma';
import { Decimal } from '../../generated/prisma/runtime/library';

export interface IncomesPayload {
    id?: string,
    title: string,
    amount: number,
    type: IncomeTypes,
    description: string,
    ownerId: string,
}

export interface IncomeFindPayload {
    id?: string,
    ownerId: string,
}

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
