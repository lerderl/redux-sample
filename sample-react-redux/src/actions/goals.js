import API from "goals-todos-api";

const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

// Action creators
function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal
  }
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id
  }
}

// Asynchronous action
const handleAddGoal = (name, cb) => {
  return (dispatch) => {
    return API.saveGoal(name)
    .then(goal => {
      dispatch(addGoal(goal))
      cb()
    })
    .catch(() => {
      alert("There was an error. Try again.")
    })
  }
}

const handleDeleteGoal = (goal) => {
  return (dispatch) => {
    dispatch(removeGoal(goal.id))

    return API.deleteGoal(goal.id)
    .catch(() => {
      dispatch(addGoal(goal))
      alert("There was an error. Try again.")
    })
  }
}

export default (ADD_GOAL, REMOVE_GOAL, handleAddGoal, handleDeleteGoal);
