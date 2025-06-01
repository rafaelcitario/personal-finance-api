import { incomeTypesCheck } from './incomeTypeChecker';

type QueryValidatorSchema = Partial<{ startDate: string, endDate: string, type: string; }>;
export function queryParamsValidator ( params: QueryValidatorSchema ) {
    const timeReguex = /^\d{4}-\d{2}-\d{2}$/;
    if ( params.startDate && !timeReguex.test( params.startDate ) || params.endDate && !timeReguex.test( params.endDate ) || params.type && !incomeTypesCheck( params.type ) ) {
        throw new Error( 'Invalid query params.' );
    }
    const query = {
        startDate: params.startDate ?? undefined,
        endDate: params.endDate ?? undefined,
        type: params.type ?? undefined
    };
    return query;
}