import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import AppHeader from './AppHeader';
import HomePage from './Home';
import NotFoundPage from './NotFound';

class App extends Component {
  render() {
    return (
      <div className="md-main">
        <AppHeader />
        <Switch>
          <Route exact path="/" component={() => <HomePage userId={"test"} />}/>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);
