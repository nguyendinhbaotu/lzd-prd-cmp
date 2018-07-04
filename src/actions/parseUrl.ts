import { Actions } from '../common/actions';
import { ItemInformation } from '../common/models';

export const parseUrl = (url : string) => ({  
    type: Actions.PARSE_URL,
    url : url,  
});

export const parseUrlFulfilled = (payload: ItemInformation) => {{
    type: Actions.PARSE_URL_FULFILLED,
    payload
}}
