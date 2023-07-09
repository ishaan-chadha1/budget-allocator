import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const AllocationItem = (props) => {
  const { deleteAllocation, increaseAllocation, decreaseAllocation, currency } = useContext(BudgetContext);

  return (
    <tr>
      <td>{props.name}</td>
      <td>{currency}{props.cost}</td>
      <td>
        <button onClick={() => increaseAllocation(props.id)} className='btn btn-success btn-sm'>+</button>
        <button onClick={() => decreaseAllocation(props.id)} className='btn btn-warning btn-sm ml-2'>-</button>
      </td>
      <td>
        <button onClick={() => deleteAllocation(props.id)} className='btn btn-danger btn-sm'>X</button>
      </td>
    </tr>
  );
};

export default AllocationItem;
