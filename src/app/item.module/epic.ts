import { PARSE_URL, PARSED_DATA } from 'app/item.module/action';
import { filter, mapTo, tap } from 'rxjs/operators';

export const parseUrlEpic = (action$) =>
  action$.pipe(
    filter((action: any) => action.type === PARSE_URL),
    tap(data =>console.log(data)),
    mapTo({ type: PARSED_DATA })
  );