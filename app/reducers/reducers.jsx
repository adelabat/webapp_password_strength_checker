import {combineReducers} from 'redux';
import trackingReducer from './trackingReducer';
import scormReducer from './scormReducer';
import userProfileReducer from './userProfileReducer';
import passwordCheckerReducer from './passwordCheckerReducer';

const GlobalState = combineReducers({
  password: passwordCheckerReducer,
  tracking:trackingReducer,
  scorm:scormReducer,
  user_profile:userProfileReducer,
});

export default GlobalState;
