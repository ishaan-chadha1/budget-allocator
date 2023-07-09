import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import AllocationItem from './AllocationItem';

const AllocationList = () => {
  const { allocations } = useContext(BudgetContext);

  return (
    <table className='table'>
      <thead className="thead-light">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Allocated Amount</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {allocations.map((allocation) => (
          <AllocationItem key={allocation.id} {...allocation} />
        ))}
      </tbody>
    </table>
  );
};

export default AllocationList;
