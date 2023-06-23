import React from 'react';
import { connect } from 'react-redux';
import { selectExpensesTotal } from '../selectors/expenses-total';
import { getVisibleExpenses } from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = (expenseCount === 1) ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')

  return (
    <div>
      <p>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
}

export const ConnectedExpensesSummary = connect(mapStateToProps)(ExpensesSummary);