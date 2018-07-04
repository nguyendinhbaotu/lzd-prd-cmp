import { Actions } from '../common/actions';

export interface ItemInformationState {
  url: string;
}

const defaultUserState: () => ItemInformationState = () => ({
  url: ''
});

export const itemInformationReducer = (state = defaultUserState(), action) => {
  switch (action.type) {
    case Actions.PARSE_URL:
      return {
        ...state,
        url: action.url
      };
    case Actions.PARSE_URL_FULFILLED:
      return {
        ...state,
        item: action.payload
      };
  }

  return state;
};
