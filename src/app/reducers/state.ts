import { TodoModel } from 'app/models';
import { RouterState } from 'react-router-redux';
import { ItemState } from 'app/item.module/model';

export interface RootState {
  item: ItemState;
  todos: RootState.TodoState;
  router: RouterState;
}

export namespace RootState {
  export type TodoState = TodoModel[];
}
