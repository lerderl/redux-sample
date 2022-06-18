import API from "goals-todos-api";

const RECEIVE_DATA = 'RECEIVE_DATA'

// Action creators
function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  }
}

// Asynchronous action
const handleInitialData = () => {
  return dispatch => {
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
      dispatch(receiveData(todos, goals))
    });
  }
}

export default (RECEIVE_DATA, handleInitialData);
