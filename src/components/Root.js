import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
