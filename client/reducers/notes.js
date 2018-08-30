const INIT = 'notes/INIT';

const initState = {
  notes: []
};

export default function reducer(state=initState, action) {

  let editState = Object.assign({}, state);
  let payload = action.payload;

  switch(action.type) {

    case INIT:
      editState.notes = payload;
      return Object.assign({}, state, editState);

    default: return state;

  }

}

export function initializeNotes(notes) {
  return {
    type: INIT,
    payload: notes
  }
}
