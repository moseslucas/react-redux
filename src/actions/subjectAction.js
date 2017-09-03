export function createSubject(subject){ 
  return {type: 'CREATE_SUBJECT', subject};
}

export function removeSubject(index){ 
  return {type: 'REMOVE_SUBJECT', index};
}
