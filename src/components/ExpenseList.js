import React from "react";
import { connect } from "react-redux";
import { ConnectedExpenseListItem } from "./ExpenseListItem";
import { getVisibleExpenses } from "../selectors/expenses";



const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
      return <ConnectedExpenseListItem {...expense} key={expense.id} />
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  }
};

export const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);