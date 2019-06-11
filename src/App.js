import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

class App extends React.Component {  
  render() {
    return (
      <BrowserRouter>
        <div className="App-wrapper">
          <HeaderContainer />
          <Nav />
          <Route path='/Profile/:id?' render={() => <ProfileContainer />} />
          <Route path='/Messages' render={() => <MessagesContainer />} />          
          <Route path='/Users' render={() => <UsersContainer />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
