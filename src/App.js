import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppProvider} from './Context/AppContext';
import Budget from './Component/Budget';
import ExpenseTotal from './Component/ExpenseTotal';
import ExpenseList from './Component/ExpenseList';
import AddExpenseForm from './Component/AddExpenseForm';
import RemainingBudget from './Component/Remaining';


const App=()=> {
  return (
    <AppProvider>
    <div className='container'>
      <h1 className='mt-3'Expense Tracker></h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget/>
        </div>
        <div className='col-sm'>
          <RemainingBudget/>
        </div>
        <div className='col-sm'>
          <ExpenseTotal/>
        </div>
      </div>
      <h3 className='mt-3'>Expense</h3>
      <div className='row'>
        <div className='col-sm'>
          <ExpenseList/>
        </div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <AddExpenseForm/>
        </div>
      </div>
    </div>
    </AppProvider>
  );
}

export default App;
