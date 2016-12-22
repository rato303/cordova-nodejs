import 'babel-polyfill';

import React, { Component } from 'react';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('font-awesome/css/font-awesome.css');

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import { pages } from './pages';

const routes = pages.map((page, index) => {

  const component = page.component;

  if (page.isIndex) {
    return (
      <IndexRoute key={index}
                  component={component} />
    );
  }

  const path = page.path;

  return (
    <Route key={path}
           path={path}
           component={component} />
  );
});

render((
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        {routes}
      </Route>
    </Router>
  </MuiThemeProvider>
  ), document.getElementById('root')
);
