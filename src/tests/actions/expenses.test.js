import { addExpense, editExpense, removeExpense } from '../../actions/expenses.js'

// test case for editExpense
// call editExpense({ note: 'New note value' })
// make assertion

test('should setup edit expense action object', () => {
  const action = editExpense( "123abc", { note: 'New note value' });
  expect(action).toEqual( {
    type: 'EDIT_EXPENSE',
    id: "123abc", 
    updates: {
      note: 'New note value' 
    }
  })
})

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({ 
    type: 'ADD_EXPENSE',
    expense: {
      description: '', 
      note: '', 
      amount: 0, 
      createdAt: 0,
      id: expect.any(String)
    }
  }) 
})