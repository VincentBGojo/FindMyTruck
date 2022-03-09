import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
// import middleware
import ajax from 'src/middlewares/ajax';

// We group redux devtools and our middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
  applyMiddleware(ajax),
);

// we create the store to which we pass the reducer and middleware (with the devtool)
const store = createStore(reducer, enhancers);

export default store;
