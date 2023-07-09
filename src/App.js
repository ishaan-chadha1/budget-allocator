import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import ExpenseForm from './components/ExpenseForm';
import AllocationList from './components/AllocationList';

const App = () => {
    return (
        <div className='container bg-info p-5 rounded shadow text-center'>
            <h1 className='mt-3 text-primary'>CodeCraftSolutions Budget And Expenses Tracker</h1>
            <div className='row mt-5'>
                <div className='col-sm'>
                    <Budget />
                </div>
                <div className='col-sm'>
                    <RemainingBudget />
                </div>
                <div className='col-sm'>
                    <ExpenseTotal />
                </div>
            </div>
            <h3 className='mt-5 text-primary'>Expenses</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <ExpenseList />
                </div>
            </div>
            <h3 className='mt-5 text-primary'>Change Expense</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <ExpenseForm/>
                </div>
            </div>
            <h3 className='mt-5 text-primary'>Allocations</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <AllocationList />
                </div>
            </div>
            <h3 className='mt-5 text-primary'>Change Allocation</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <AllocationForm/>
                </div>
            </div>
        </div>
    );
};

export default App;
