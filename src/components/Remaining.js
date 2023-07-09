import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const Remaining = () => {
  const { expenses, budget, currency } = useContext(BudgetContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const remaining = budget - totalExpenses;

  return (
    <div className='alert alert-success'>
      <span>Remaining: {currency}{remaining}</span>
    </div>
  );
};

export default Remaining;
