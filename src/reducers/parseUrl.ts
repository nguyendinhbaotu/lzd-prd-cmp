import { Actions } from '../common/actions';
import { ItemInformation } from '../common/models';

export interface ItemInformationState {
  url: string;
  item: ItemInformation
}

const defaultUserState: () => ItemInformationState = () => ({
  url: '',
  item: {
      title: '',
      price: ''
  }
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
