import { Router } from 'express';
import { transactionIncomesController } from '../controllers/transactions.controller';

export const transactionsRoutes = Router();

transactionsRoutes.post( '/incomes', transactionIncomesController );
transactionsRoutes.get( '/incomes', transactionIncomesController );
transactionsRoutes.put( '/income/{:id}', transactionIncomesController );
transactionsRoutes.get( '/income/{:id}', transactionIncomesController );
transactionsRoutes.delete( '/income/{:id}', transactionIncomesController );

