let nextClassId = 3;
export function setTitle(title) {
    return {
      type: "SET_TITLE",
      payload: title
    }  
  }
  
  export function setGoal(number) {
    return {
      type: "SET_GOAL",
      payload: number
    }  
  }

  export function addClass(title) {
    return {
      type: "ADD_CLASS",
      payload: title,
      id: nextClassId++
    }
  }