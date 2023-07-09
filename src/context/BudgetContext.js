import React, { createContext, useReducer } from 'react';
import AppReducer from '../AppReducer';

const initialState = {
  budget: 20000,
  expenses: [],
  allocations: [
    { id: 1, name: 'Rent', cost: 5000 },
    { id: 2, name: 'Groceries', cost: 2000 },
    { id: 3, name: 'Utilities', cost: 1500 },
  ],
  currency: '$',
};

export const BudgetContext = createContext(initialState);

export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteExpense(id) {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  }

  function addExpense(expense) {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  }

  function increaseExpense(id) {
    dispatch({
      type: 'INCREASE_EXPENSE',
      payload: id,
    });
  }

  function decreaseExpense(id) {
    dispatch({
      type: 'DECREASE_EXPENSE',
      payload: id,
    });
  }

  function addAllocation(allocation) {
    dispatch({
      type: 'ADD_ALLOCATION',
      payload: allocation,
    });
  }

  function deleteAllocation(id) {
    dispatch({
      type: 'DELETE_ALLOCATION',
      payload: id,
    });
  }

  function increaseAllocation(id) {
    dispatch({
      type: 'INCREASE_ALLOCATION',
      payload: id,
    });
  }

  function decreaseAllocation(id) {
    dispatch({
      type: 'DECREASE_ALLOCATION',
      payload: id,
    });
  }

  function editBudget(amount) {
    dispatch({
      type: 'EDIT_BUDGET',
      payload: amount,
    });
  }

  function changeCurrency(currency) {
    dispatch({
      type: 'CHANGE_CURRENCY',
      payload: currency,
    });
  }

  return (
    <BudgetContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        allocations: state.allocations,
        currency: state.currency,
        deleteExpense,
        addExpense,
        increaseExpense,
        decreaseExpense,
        addAllocation,
        deleteAllocation,
        increaseAllocation,
        decreaseAllocation,
        editBudget,
        changeCurrency,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
