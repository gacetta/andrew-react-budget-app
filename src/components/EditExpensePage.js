import React from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editExpense, removeExpense } from "../actions/expenses";
import { ExpenseForm } from "./ExpenseForm";

export class EditExpensePage extends React.component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    navigate("/");
  };
  onClick = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    navigate("/");
  };

  render() {
    return (
      <div>
        <h2>Edit Expense:</h2>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

// const EditExpensePage = (props) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   // console.log(id);
//   return (
//     <div>
//       <h2>Edit Expense:</h2>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={(expense) => {
//           props.dispatch(editExpense(expense.id, expense));
//           navigate('/');
//         }}
//       />
//       <button
//         onClick={() => {
//           props.dispatch(removeExpense({ id }));
//           navigate('/');
//         }}>Remove
//       </button>
//     </div>
//   )
// }

const mapStateToProps = (state, props) => {
  // const id = props.match.params.id;
  // const { id } = useParams();
  const id = window.location.pathname.split("/edit/")[1];
  return {
    expense: state.expenses.find((expense) => expense.id === id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data)),
});

export const ConnectedEditExpensePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);

// // Andrew's Code:

// import React from "react";
// import { connect } from "react-redux";
// import { ExpenseForm } from "./ExpenseForm";

// const EditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={(expense) => {
//           props.dispatch(editExpense(props.match.params.id, expense));
//           props.history.push('/')
//         }}
//       />
//     </div>
//   )
// }

// const mapStateToProps = (state, props) => {
//   return {
//     expense: state.expenses.find((expense) => expense.id === props.match.params.id)
//   };
// };

// export default connect(mapStateToProps)(EditExpensePage);

// // Solution from Q&A without mapStateToProps

// import React from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useSelector, connect } from 'react-redux';
// import ExpenseForm from './ExpenseForm';
// import { editExpense, removeExpense } from '../actions/expenses';

// const EditExpensePage = (props) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const expense = useSelector((state) => state.expenses.find(expense => expense.id === id));

//   return (
//     <div>
//       <ExpenseForm
//         expense={expense}
//         onSubmit={(expense) => {
//           props.dispatch(editExpense(id, expense));
//           navigate('/');
//         }}
//       />
//       <button onClick={(e) => {
//         props.dispatch(removeExpense({ id }));
//         navigate('/');
//       }}>Remove</button>
//     </div>
//   );
// };

// export default connect()(EditExpensePage);
