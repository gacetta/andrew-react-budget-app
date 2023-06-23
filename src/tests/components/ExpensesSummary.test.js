import React from 'react';
import { ExpensesSummary } from "../../components/ExpensesSummary";
import { shallow } from 'enzyme';

test('should correctly render ExpensesSummary with single expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={1000}/>)
  expect(wrapper).toMatchSnapshot();
})

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={40} expensesTotal={80293487}/>)
  expect(wrapper).toMatchSnapshot();
})