import {combineReducers} from 'redux';
import courses from './courseReducer';

//ito na yung state
const rootReducer = combineReducers({ 
  courses
});

export default rootReducer;
