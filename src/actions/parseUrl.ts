import {actionsEnums} from '../common/actionsEnums';

export const parseUrl = (url : string) => ({  
    type: actionsEnums.PARSE_URL,
    url : url,  
});
