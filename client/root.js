import { combineReducers } from 'redux';
import notes from './reducers/notes';
import user from './reducers/user';

export default combineReducers({
  notes, user
});
