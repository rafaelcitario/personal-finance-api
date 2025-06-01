import { IncomeTypes } from '../../generated/prisma';

export function incomeTypesCheck ( type: string ) {
    let incomeType = Object.keys( IncomeTypes ).map( incomeType => {
        if ( type.toUpperCase() == incomeType.toUpperCase() ) {
            return true;
        }
    } );
    incomeType = incomeType.filter( ( type ) => {
        return type;
    } );

    return incomeType.length <= 0 || incomeType == undefined ? false : true;
};