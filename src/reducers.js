import { combineReducers } from 'redux';
import user from './containers/login/reducers';

const rootReducer = combineReducers({
  user
});

export default rootReducer;
