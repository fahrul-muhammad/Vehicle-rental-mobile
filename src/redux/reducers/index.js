import {combineReducers} from 'redux';
import authReducer from './auth';
// import myProductReducer from "./myProductReducer";

const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;
