import API from "goals-todos-api";

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

// Action Creators
function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

// Asynchronous action
const handleAddTodo = (name, cb) => {
  return dispatch => {
    return API.saveTodo(name)
    .then(todo => {
      dispatch(addTodo(todo))
      cb()
    })
    .catch(() => {
      alert("There was an error. Try again.")
    })
  }
}

const handleDeleteTodo = (todo) => {
  return (dispatch) => {
    dispatch(removeTodo(todo.id))

    return API.deleteTodo(todo.id)
    .catch(() => {
      dispatch(addTodo(todo))
      alert("An error occurred. Try again.")
    })
  }
}

const handleToggle = (id) => {
  return dispatch => {
    dispatch(toggleTodo(id))

    return API.saveTodoToggle(id)
    .catch(() => {
      dispatch(toggleTodo(id))
      alert("An error occurred. Try again.")
    })
  }
}

export default (ADD_TODO, REMOVE_TODO, TOGGLE_TODO, handleAddTodo, handleDeleteTodo, handleToggle);
