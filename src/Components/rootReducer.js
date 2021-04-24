import {combineReducers}  from 'redux';
import AuthReducer from './Redux/auth/AuthReducer';
import CateogoryReducer from './Redux/category/CateogoryReducer';
export default combineReducers({
    auth:AuthReducer,
    categories:CateogoryReducer,
})
