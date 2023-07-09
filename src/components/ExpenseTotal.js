import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const ExpenseTotal = () => {
    const { expenses } = useContext(BudgetContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
