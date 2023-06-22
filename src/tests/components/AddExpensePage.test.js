import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";

let addExpenseSpy, wrapper;

beforeEach(() => {
  addExpenseSpy = jest.fn();
  wrapper = shallow(<AddExpensePage addExpense={addExpenseSpy} />);
});

test("should render AddExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
});
