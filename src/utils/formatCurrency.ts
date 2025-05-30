import { Decimal } from '../../generated/prisma/runtime/library';

export function incomeValorFormatCurrency ( money: number ): Decimal {
    if ( money <= -1 || typeof money != 'number' ) {
        throw new Error( 'Field "valor" is malformed in Payload.' );
    }
    return new Decimal( money ).dividedBy( 100 );
}
