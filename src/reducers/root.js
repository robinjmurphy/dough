import { combineReducers } from 'redux';
import transactions from './transactions';
import { loadingBarReducer } from 'react-redux-loading-bar';

export default combineReducers({
  transactions,
  loadingBar: loadingBarReducer
});
