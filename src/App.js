import React from 'react';

import { Route } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';

import Shop from './Pages/Shop/Shop';

import Header from './Components/Header/Header';

import SignupLogin from './Pages/SignupLogin/SignupLogin';

import './index.css';
import { auth } from './firebase/utils';

class App extends React.Component {

  state = {
    currentUser: null
  };

  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      console.log('auth state changed');
      if (user) {
        this.setState(_ => ({ currentUser: user }));
      } else {
        this.setState(_ => ({ currentUser: null }));
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    // console.log('auth user in render ', auth.currentUser);
    return (
      <div className="App" >
        <Header user={this.state.currentUser} />
        <Route component={Shop} path={'/shop'} exact />
        <Route component={Homepage} path={'/'} exact />
        <Route component={SignupLogin} path={'/sign-in'} exact />
      </div>
    );
  }
}


export default App;
