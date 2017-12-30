import * as type from '../actions/actionTypes';
export default function subjectReducer(state=[], action){ 

  switch(action.type){ 

    case type.CREATE_SUBJECT:
      return [...state, Object.assign({}, action.subject)];
    case type.REMOVE_SUBJECT:
      return state.filter((val) => val.name!=action.name);
    case type.SELECT_SUBJECT:
      return state.filter((val)=>val.name == action.name);
    default:
      return state;
  }

}
