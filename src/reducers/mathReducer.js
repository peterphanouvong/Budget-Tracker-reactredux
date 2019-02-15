const mathReducer = (state = {result: 1,
    lastValues:[]}, action) => {
    switch(action.type) {
      case "ADD":
        state = {
          ...state, // get all the things from previous state
          // ovewrite to get new state
          result: state.result + action.payload,
          lastValues: [...state.lastValues, action.payload]
        }
        break;
      case "SUBTRACT":
      state = {
        ...state, // get all the things from previous state
        // ovewrite to get new state
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
        break;
      default:
        // code block
    }
    return state;
  };
  
  export default mathReducer;