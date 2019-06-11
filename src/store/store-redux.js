import { createStore, combineReducers } from 'redux';
import postReducer from './postReducer'
import messageReducer from './messageReducer'
import usersReducer from './usersReducer';
import accountReducer from './accountReducer';


let listRedusers = combineReducers({
    postPage: postReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    account: accountReducer
});

let store = createStore(listRedusers);

window.st = store;
export default store;