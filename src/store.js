import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import loadingBarMiddleware from './loadingBarMiddleware';
import reducer from './reducers/root';

export default function configureStore() {
  const createFinalStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(loadingBarMiddleware()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  return createFinalStore(reducer);
}
