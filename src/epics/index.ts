import { combineEpics } from 'redux-observable';
import { parseUrlEpic } from './parseUrlEpic';

export const rootEpic = combineEpics(
    parseUrlEpic
);