import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import AppHeader from './AppHeader';
import HomePage from './Home';
import NotFoundPage from './NotFound';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="md-main">
        <AppHeader />
        <Switch>
          <Route exact path="/" component={() => <HomePage userId={5} />}/>
          <Route exact path="/login" component={() => <Login history={this.props.history}/>}/>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  history: PropTypes.object
};

export default hot(module)(App);
