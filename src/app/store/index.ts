import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';
import { logger } from 'app/middleware';
import { RootState, rootReducer, rootEpic } from 'app/reducers';
import { createEpicMiddleware } from 'redux-observable';

export function configureStore(history: History, initialState?: RootState): Store<RootState> {
  // let epicMiddleware = createEpicMiddleware()
  // let middleware = applyMiddleware(logger, routerMiddleware(history), epicMiddleware);
  let middleware = applyMiddleware(logger, routerMiddleware(history));

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer as any, initialState as any, middleware) as Store<RootState>;
  // epicMiddleware.run(rootEpic);

  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      const nextReducer = require('app/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
