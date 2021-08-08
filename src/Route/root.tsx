import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {MainScreen} from '../screens/MainScreen';
import {GlobalStyle} from '../globalStyles';

export const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <GlobalStyle />
          <MainScreen />
          {/* <Footer/> */}
        </Route>
        <Route exact path="/favorite">
          {/* <FavoriteScreen /> */}
        </Route>
      </Switch>
    </Router>
  );
};
