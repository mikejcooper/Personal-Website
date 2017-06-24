import { combineReducers } from 'redux';

import modal from './modalReducer';
import navBar from './navBarReducer';

export default combineReducers({
  modal,
  navBar
});
