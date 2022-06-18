import ADD_GOAL from "../actions/goals";
import ADD_TODO from "../actions/todos";

const checker = store => next => action => {
  if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')) {
    return alert("Nope. Bad idea.")
  }

  if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')) {
    return alert("Nope. Bad idea.")
  }

  return next(action)
}

export default checker;
