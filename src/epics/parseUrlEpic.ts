import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs/internal/Observable';
import { filter, mergeMap, map } from 'rxjs/operators';
import { Actions } from '../common/actions';
import { Action } from 'redux';
import { parseUrlFulfilled } from '../actions/parseUrl';
import { ItemInformation } from '../common/models';
import { Epic } from 'redux-observable';
import { RootState } from '../reducers';

export const parseUrlEpic = (action$, state) =>
  action$.ofType(Actions.PARSE_URL).pipe(
    mergeMap((action: any) => {
      return ajax.getJSON(`http://localhost:9090/parse?url=${action.url}`).pipe(
        map((response) => {
          return parseUrlFulfilled(response as ItemInformation);
        })
      );
    })
  );
