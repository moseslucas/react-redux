import {combineReducers} from 'redux';
import courses from './courseReducer';
import subjects from './subjectReducer';

//ito na yung state
const rootReducer = combineReducers({ 
  courses,
  subjects
});

export default rootReducer;
