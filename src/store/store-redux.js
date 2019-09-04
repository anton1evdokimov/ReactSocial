import { createStore, combineReducers, applyMiddleware } from 'redux';
import postReducer from './postReducer'
import messageReducer from './messageReducer'
import usersReducer from './usersReducer';
import accountReducer from './accountReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let listRedusers = combineReducers({
    postPage: postReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    account: accountReducer,
    form: formReducer
});

let store = createStore(listRedusers, applyMiddleware(thunkMiddleware));

window.st = store;
export default store;