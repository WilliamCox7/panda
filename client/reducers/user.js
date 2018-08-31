const SET = 'user/SET';

const initState = {
  userId: null,
  first_name: null
}

/**
 * @method reducer the reducer for the scripture
 * @param {object} [state=initState] allow the initial state to be manipulated
 * @param {object} action the incoming settings
 * @returns the new state
 */

export default function reducer(state=initState, action) {
  let editState = Object.assign({}, state);
  switch(action.type) {

    case SET:
      editState.userId = action.userId;
      editState.first_name = action.first_name;
      return Object.assign({}, state, editState);

    default: return state;

  }
}

export function setUser(userId, first_name) {
  return {
    type: SET,
    userId: userId,
    first_name: first_name
  }
}
