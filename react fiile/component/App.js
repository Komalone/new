//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import NewExpense from './component/new Exp/NewExp';

import Expenses from './component/Expense/Expenses' //using capital letter so that we can identify it as custom component

const App= ()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler= expense=>{
    console.log('in App.js')
    console.log(expense)
  };
    // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  
  return (
    <div>
      <NewExpense onAddExp={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
