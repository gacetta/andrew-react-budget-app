import { expensesReducer } from "../../reducers/expenses";
import { expenses } from "../fixtures/expenses";

test("should test default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add a default expense", () => {
  const action = {
    type: "ADD_EXPENSE",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses,
    {
      uuid: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  ]);
});

test("should add an expense", () => {
  const expense = {
    id: "109",
    description: "test",
    note: "test",
    amount: 100,
    createdAt: 100,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const description = "expense update";
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: {
      description,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state[0].description).toEqual(description);
});

test("should not edit an expense if id not found", () => {
  const description = "expense update";
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      description,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
