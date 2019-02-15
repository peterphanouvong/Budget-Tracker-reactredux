const initialState = {
  budget_classes: [
    {
      title: "Groceries",
      goal: 200,
      id: 1
    },
    {
      title: "Bills",
      goal: 400,
      id: 2
    }
  ],
  net_balance: 0
}

const budgetClassReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_TITLE":
      state = {
        ...state, // get all the things from previous state
        // ovewrite to get new state
        title: action.payload
      }
      break;
    case "SET_GOAL":
      state = {
        ...state, // get all the things from previous state
        // ovewrite to get new state
        goal: action.payload
      }
      break;
    case "ADD_CLASS":
      state = {
        ...state,
        budget_classes: [...state.budget_classes, {
          title: action.payload,
          goal: 122,
          id: action.id
        }]
      }
      break;
    default:
      //console.log('Hi')
  }
  return state;
};

export default budgetClassReducer;