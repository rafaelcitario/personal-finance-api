import { IncomeTypes } from '../../generated/prisma';

export function incomeTypesCheck ( type: string ) {
    return Object.keys( IncomeTypes ).map( incomeType => {
        if ( type == incomeType ) {
            return true;
        }
    } ) ? true : false;
};