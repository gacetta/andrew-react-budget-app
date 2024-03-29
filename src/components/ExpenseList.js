import React from "react";
import { connect } from "react-redux";
import { ExpenseListItem } from "./ExpenseListItem";
import { getVisibleExpenses } from "../selectors/expenses";

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No Expenses</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem {...expense} key={expense.id} />;
      })
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

export const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);
