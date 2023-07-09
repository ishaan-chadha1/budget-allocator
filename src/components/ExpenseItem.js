import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const ExpenseItem = (props) => {
  const { deleteExpense, increaseExpense, decreaseExpense, currency } = useContext(BudgetContext);

  return (
    <tr>
      <td>{props.name}</td>
      <td>{currency}{props.cost}</td>
      <td>
        <button onClick={() => increaseExpense(props.id)} className='btn btn-success btn-sm'>+</button>
        <button onClick={() => decreaseExpense(props.id)} className='btn btn-warning btn-sm ml-2'>-</button>
      </td>
      <td>
        <button onClick={() => deleteExpense(props.id)} className='btn btn-danger btn-sm'>X</button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
