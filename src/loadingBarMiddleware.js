import { showLoading, hideLoading } from 'react-redux-loading-bar';

export default function loadingBarMiddleware(config = {}) {
  return ({ dispatch }) => next => action => {
    if (action.type) {
      const isRequested = /REQUEST_/;
      const isReceived = /RECEIVE_/;

      if (action.type.match(isRequested)) {
        dispatch(showLoading());
      } else if (action.type.match(isReceived)) {
        dispatch(hideLoading());
      }
    }

    return next(action);
  };
}
