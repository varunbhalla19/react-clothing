import React from 'react';

import { Route } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';

import Shop from './Pages/Shop/Shop';

import Header from './Components/Header/Header';

import SignupLogin from './Pages/SignupLogin/SignupLogin';

import { auth, letsCreateProfile } from './firebase/utils';

import './index.css';

class App extends React.Component {

  state = {
    currentUser: null
  };

  unsubscribe = null;

  componentDidMount() {

    this.unsubscribe = auth.onAuthStateChanged(user => {
      console.log('auth state changed ', user);

      if (user) {
        console.log(user.custom_Name);

        letsCreateProfile(user, user.custom_Name).then(docRef => {
          console.log('ref is ', docRef);
          docRef.onSnapshot(snap => {
            this.setState(_ => ({
              currentUser: {
                id: snap.id,
                ...snap.data()
              }
            }), _ => console.log(this.state))
          })
        })
      } else {
        this.setState(_ => ({ currentUser: null }));
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
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


