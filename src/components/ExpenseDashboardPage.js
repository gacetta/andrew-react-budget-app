import React from 'react';
import { ConnectedExpenseList } from './ExpenseList';
import { ConnectedExpenseListFilters } from './ExpenseListFilters';

export const ExpenseDashboardPage = () => (
  <div>
    <ConnectedExpenseListFilters />
    <ConnectedExpenseList />
  </div>
)