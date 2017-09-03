export default function subjectReducer(state=[], action){ 

  switch(action.type){ 

    case 'CREATE_SUBJECT':
      return [...state, Object.assign({}, action.subject)];

    case 'REMOVE_SUBJECT':
      return state;

    default:
      return state;
  }

}
