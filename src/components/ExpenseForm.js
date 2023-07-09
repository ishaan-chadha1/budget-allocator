import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BudgetContext } from '../context/BudgetContext';

const ExpenseForm = () => {
  const { addExpense, currency } = useContext(BudgetContext);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name !== '' && cost > 0) {
      const expense = {
        id: uuidv4(),
        name: name,
        cost: cost,
      };

      addExpense(expense);
      setName('');
      setCost('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-sm'>
          <label htmlFor='name'>Name</label>
          <input
            required='required'
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className='col-sm'>
          <label htmlFor='cost'>Cost</label>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>{currency}</span>
            </div>
            <input
              required='required'
              type='number'
              className='form-control'
              id='cost'
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <button type='submit' className='btn btn-primary mt-3'>
            Save
          </button>
          {error && (
            <p style={{ color: 'red' }}>Name and cost are required!</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
