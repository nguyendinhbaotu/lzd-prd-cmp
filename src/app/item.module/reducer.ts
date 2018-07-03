import { PARSE_URL } from './action';
import { handleActions, Action } from 'redux-actions';
import { ItemModel, ItemState } from 'app/item.module/model';


const initialState: ItemState = <ItemModel>{
  url: 'Use Redux with TypeScript'
};

export default handleActions<ItemState, ItemState>({
  [PARSE_URL]: (state: ItemState, action: Action<ItemState>): ItemState => {
    console.log(state)
    console.log(action)
    return state
  }
}, initialState);
