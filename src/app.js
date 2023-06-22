import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { configureStore } from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { getVisibleExpenses } from "./selectors/expenses";
import "normalize.css";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(
  addExpense({
    description: "Piano",
    note: `Steinway Model B - 6' 10.5" - MSRP $124,900`,
    amount: 12490000,
  })
);

store.dispatch(
  addExpense({
    description: "Bassoon",
    note: "Fox Model 680 Bassoon - $33,235",
    amount: 3323500,
    createdAt: 1000,
  })
);

store.dispatch(
  addExpense({
    description: "Top Of The Line Kazoo",
    note: "Monoprice Metal Kazoo - $6.67 on amazon",
    amount: 667,
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector("#app"));
