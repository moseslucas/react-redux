import * as type from './actionTypes';

export function createSubject(subject){ 
  return {type: type.CREATE_SUBJECT, subject};
}

export function removeSubject(name){ 
  return {type: type.REMOVE_SUBJECT, name};
}

export function selectSubject(name){ 
  return {type: type.SELECT_SUBJECT, name};
}
