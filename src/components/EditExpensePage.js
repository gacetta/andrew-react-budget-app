import React from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { editExpense } from "../actions/expenses";
import { ExpenseForm } from "./ExpenseForm";

const EditExpensePage = (props) => {
  let { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);
  return (
    <div>
      <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense) => {
          console.log('updated: ', expense)
          props.dispatch(editExpense(props.expense.id, expense));
          navigate('/');
        }}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  let { id } = useParams();
  return {
    expense: state.expenses.find((expense) => expense.id === id)
  }
}

export const ConnectedEditExpensePage = connect(mapStateToProps)(EditExpensePage);


// // Andrew's Code:

// import React from "react";

// const EditExpensePage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       Editing expense with id of {props.match.params.id}
//     </div>
//   )
// }

// export default EditExpensePage;


// ATTEMPTING TO GET PROPS

// const EditExpensePage = (props) => {
//   let { id } = useParams();
//   console.log(id);
//   const navigate = useNavigate();
//   return (
//     <div>
//       <ExpenseForm 
//         {...props}
//         blank={false}
//         onSubmit={(expense)=> {
//           props.dispatch(addExpense(expense));
//           navigate('/');
//         }}/>
//     </div>
//   )
// }