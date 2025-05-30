import { IncomeTypes } from '../../generated/prisma';

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