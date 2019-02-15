
const userReducer = (state = {name: "tom",
  age: 0}, action) => {
  switch(action.type) {
    case "SET_NAME":
      state = {
        ...state, // get all the things from previous state
        // ovewrite to get new state
        name: action.payload
      }
      break;
    case "SET_AGE":
    state = {
      ...state, // get all the things from previous state
      // ovewrite to get new state
      age: action.payload
    }
      break;
    default:
      //console.log('Hi')
  }
  return state;
};

export default userReducer;