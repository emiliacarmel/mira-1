import { combineReducers } from 'redux';
import graphReducer from './graphReducer';

// import all reducers here

// combine reducers
const reducers = combineReducers({
  graph: graphReducer,
  // fill in more later if we have more reducers
});

export default reducers;