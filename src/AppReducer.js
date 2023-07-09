const AppReducer = (state, action) => {
    switch (action.type) {
    case 'DELETE_EXPENSE':
        return {
            ...state,
            expenses: state.expenses.filter(
            (expense) => expense.id !== action.payload
            ),
        };
        case 'ADD_EXPENSE':
        return {
            ...state,
            expenses: [action.payload, ...state.expenses],
        };
        case 'INCREASE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.id === action.payload
            ? { ...expense, cost: Number(expense.cost) + 10 }
            : expense
        ),
      };
      case 'ADD_ALLOCATION':
        return {
          ...state,
          allocations: [action.payload, ...state.allocations],
        };
      case 'DELETE_ALLOCATION':
        return {
          ...state,
          allocations: state.allocations.filter(
            (allocation) => allocation.id !== action.payload
          ),
        };
      case 'EDIT_BUDGET':
        return {
          ...state,
          budget: action.payload,
        };
      case 'CHANGE_CURRENCY':
        return {
          ...state,
          currency: action.payload,
        };
      default:
        return state;
    }
};

export default AppReducer;