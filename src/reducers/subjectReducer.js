export default function subjectReducer(state=[], action){ 

  switch(action.type){ 

    case 'CREATE_SUBJECT':
      return [...state, Object.assign({}, action.subject)];
      break;

    case 'REMOVE_SUBJECT':
      return state.filter((val) => val.name!=action.name);
      break;

    case 'SELECT_SUBJECT':
      return state.filter((val)=>val.name == action.name);
      break;


    default:
      return state;
  }

}
