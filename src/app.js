import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses'
import 'normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses)
})

const waterBill = store.dispatch(addExpense({ 
  description: 'Water Bill',
  note: 'Water bill for January 2023',
  amount: 4500
}))

const gasBill = store.dispatch(addExpense({ 
  description: 'Gas Bill',
  note: 'Gas bill for January 2023',
  amount: 1000,
  createdAt: 1000
}))

const rentBill = store.dispatch(addExpense({ 
  description: 'Rent',
  note: 'Rent for January 2023',
  amount: 100000
}))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'))