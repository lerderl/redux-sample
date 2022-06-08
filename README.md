{
  users: {},
  setting: {},
  tweets: {
    btyxlj: {
      id: 'btyxlj',
      text: 'What is a jQuery?',
      author: {
        name: 'Tyler McGinnis',
        id: 'tylermcginnis',
        avatar: 'twt.com/tm.png'
      }   
    }
  }  
}

const reducer = combineReducers({
  users,
  settings,
  tweets,
});

function tweets(state = {}, action) {
  switch (action.type) {
    case ADD_TWEET:
    // ...
    case REMOVE_TWEET:
    //  ...
    case UPDATE_AVATAR:
      return {
        ...state,
        [action.tweetId]: {
          ...state[action.tweetId],
          author: {
            ...state[action.tweetId].author,
            avatar: action.newAvatar,
          },
        },
      };
  }
}

function author (state, action) {
  switch (action.type) {
    case : UPDATE_AVATAR
      return {
        ...state,
        avatar: action.newAvatar
      }
    default :
      state
  }
}

function tweet (state, action) {
  switch (action.type) {
    case ADD_TWEET :
      ...
    case REMOVE_TWEET :
      ...
    case : UPDATE_AVATAR
      return {
        ...state,
        author: author(state.author, action)
      }
    default :
      state
  }
}

function tweets (state = {}, action) {
  switch(action.type){
    case ADD_TWEET :
      ...
    case REMOVE_TWEET :
      ...
    case UPDATE_AVATAR :
      return {
        ...state,
        [action.tweetId]: tweet(state[action.tweetId], action)
      }
    default :
      state
  }
}

import { combineReducers } from 'redux';
import booksReducer from './books_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    books: booksReducer,
    users: userReducer
});

export default rootReducer;

const store = Redux.createStore( <reducer-function>, <middleware-functions> )

applyMiddleware(...middlewares)


