import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
/**
 ito ung state.
 */
export default combineReducers({
  libraries: LibraryReducer,
  activeLibraryId: SelectionReducer,
});

