import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const Budget = () => {
  const { budget, currency } = useContext(BudgetContext);

  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency}{budget}</span>
    </div>
  );
};

export default Budget;
