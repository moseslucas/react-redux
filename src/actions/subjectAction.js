export function createSubject(subject){ 
  return {type: 'CREATE_SUBJECT', subject};
}

export function removeSubject(name){ 
  return {type: 'REMOVE_SUBJECT', name};
}

export function selectSubject(name){ 
  return {type: 'SELECT_SUBJECT', name};
}
