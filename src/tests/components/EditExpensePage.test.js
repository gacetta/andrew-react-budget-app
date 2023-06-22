import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";
import { editExpense } from "../../actions/expenses";

let wrapper, removeExpenseSpy, editExpenseSpy;

beforeEach(() => {
  removeExpenseSpy = jest.fn();
  editExpenseSpy = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpenseSpy}
      removeExpense={removeExpenseSpy}
      expense={expenses[2]}
    />
  );
});

test("should render EditExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]);
  expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test("should handle removeExpense", () => {
  wrapper.find("button").simulate("click");
  expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[2].id });
});
