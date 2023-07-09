import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const AllocationItem = (props) => {
  const { deleteAllocation, currency } = useContext(BudgetContext);

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        <span className='badge badge-primary badge-pill mr-3' style={{ color: 'black' }}>
          {currency}
          {props.cost}
        </span>
      </td>
      <td>
        <button
          onClick={() => deleteAllocation(props.id)}
          className='btn btn-danger btn-sm'
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default AllocationItem;
