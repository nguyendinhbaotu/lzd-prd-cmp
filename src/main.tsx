import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { App } from './app';
import { rootReducer } from './reducers';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();
const nonTypedWindow: any = window;
const composeEnhancers = nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));
epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <>
      <App />,
    </>
  </Provider>,
  document.getElementById('root')
);
