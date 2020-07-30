import React from 'react';

import { Route } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';

import Shop from './Pages/Shop/Shop';

import Header from './Components/Header/Header';

import SignupLogin from './Pages/SignupLogin/SignupLogin';

import './index.css';

const App = props => (
  <div className="App" >
    <Header />
    <Route component={Shop} path={'/shop'} exact />
    <Route component={Homepage} path={'/'} exact />
    <Route component={SignupLogin} path={'/sign-in'} exact />
  </div>
);

export default App;
