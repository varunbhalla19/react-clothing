import React from 'react';

import { Route } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';

import Shop from './Pages/Shop/Shop';

import './index.css';

const App = props => (
  <div className="App" >
    <Route component={Shop} path={'/shop'} exact />
    <Route component={Homepage} path={'/'} exact />
  </div>
);

export default App;
