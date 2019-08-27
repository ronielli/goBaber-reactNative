import {createStore, compose, applyMiddleware} from 'redux';

export default (reducers, middlewars) => {
  const enhacer = __DEV__
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(...middlewars),
      )
    : applyMiddleware(...middlewars);

  return createStore(reducers, enhacer);
};
