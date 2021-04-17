import {combineReducers}  from 'redux';
import AuthReducer from './Redux/auth/AuthReducer';


export default combineReducers({
    auth:AuthReducer,
})
