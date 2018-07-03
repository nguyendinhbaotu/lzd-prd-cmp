import { createAction } from 'redux-actions';
import { ItemModel, ItemState } from 'app/item.module/model';

export const PARSE_URL = 'PARSE_URL';
export const PARSED_DATA = 'PARSED_DATA';

// const parseUrl = createAction<ItemModel, ItemModel>(
//   PARSE_URL,
//   (item: ItemModel) => ({ ...item, isParsed: true })
// );

const parseUrl = createAction<ItemState, string>(
    PARSE_URL, 
    (url: string) => ({ url })
);

export {
    parseUrl
}