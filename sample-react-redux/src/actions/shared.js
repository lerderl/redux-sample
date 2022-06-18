import API from "goals-todos-api";

export const RECEIVE_DATA = 'RECEIVE_DATA'

// Action creators
function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  }
}

// Asynchronous action
export function handleInitialData() {
  return dispatch => {
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
      dispatch(receiveData(todos, goals))
    });
  }
}
