import { Router } from 'express';
import { createIncomeController, deleteIncomeController, getIncomeByIdController, listIncomesController, updateIncomeController } from '../controllers/transactions.controller';

export const transactionsRoutes = Router();

transactionsRoutes.post( '/incomes', createIncomeController );
transactionsRoutes.get( '/incomes', listIncomesController );
transactionsRoutes.get( '/income/{:id}', getIncomeByIdController );
transactionsRoutes.put( '/income/{:id}', updateIncomeController );
transactionsRoutes.delete( '/income/{:id}', deleteIncomeController );

