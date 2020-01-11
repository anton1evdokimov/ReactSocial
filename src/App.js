import React from 'react';
import store from '../src/store/store-redux'
import { Provider } from 'react-redux';
import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NotFound from './components/common/NotFound';
import Login from './components/Login/Login';

export default () =>  (
      <Provider store={store}>
        <BrowserRouter>
            <HeaderContainer />
            <Nav />
            <Switch>
            <Route path='/Profile/:id?' render={() => <ProfileContainer />} />
            <Route path='/Messages' render={() => <MessagesContainer />} />
            <Route path='/Users' render={() => <UsersContainer />} />
            <Route path='/Login' render={() => <Login />} />
            <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
      </Provider>
    );
