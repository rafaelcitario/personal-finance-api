import { IncomeTypes } from '../../generated/prisma';

export interface IncomesPayload {
    title: string,
    valor: number,
    type: IncomeTypes,
    description: string,
    ownerId: string,
}