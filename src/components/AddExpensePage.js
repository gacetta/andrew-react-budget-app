import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";
import { ExpenseForm } from "./ExpenseForm";

export class AddExpensePage extends React.component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    navigate("/");
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense)),
});

export const ConnectedAddExpensePage = connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
