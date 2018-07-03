import { combineReducers } from 'redux';
import { RootState } from './state';
import { routerReducer, RouterState } from 'react-router-redux';
import itemReducer from 'app/item.module';
import { todoReducer } from 'app/reducers/todos';
export { RootState, RouterState };
import { combineEpics } from 'redux-observable';
import { parseUrlEpic } from 'app/item.module/epic';

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  item: itemReducer as any,
  todos: todoReducer as any,
  router: routerReducer as any
});

export const rootEpic = combineEpics({
  parseUrlEpic
})