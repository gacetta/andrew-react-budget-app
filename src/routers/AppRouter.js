import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage';
import { ConnectedAddExpensePage } from '../components/AddExpensePage'
import { ConnectedEditExpensePage }  from '../components/EditExpensePage';
import { HelpPage } from '../components/HelpPage';
import { NotFoundPage } from '../components/NotFoundPage';
import { Header } from '../components/Header'

export const AppRouter = () => (
  <Router>
    <div>
      <Header />
    </div>
    <Routes>
      <Route path='/' element={<ExpenseDashboardPage />}/>
      <Route path='/create' element={<ConnectedAddExpensePage />}/>
      <Route path='/edit/:id' element={<ConnectedEditExpensePage />}/>
      <Route path='/help' element={<HelpPage />}/>
      <Route path='*' element={<NotFoundPage />}/>
    </Routes>
  </Router>
);