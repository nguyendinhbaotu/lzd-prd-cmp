import { actionsEnums } from '../common/actionsEnums';

export interface ItemInformationState {
  url: string;
}

const defaultUserState: () => ItemInformationState = () => ({
  url: ''
});

export const itemInformationReducer = (state = defaultUserState(), action) => {
  switch (action.type) {
    case actionsEnums.PARSE_URL:
      return {
        ...state,
        url: action.url,
      }
  }

  return state;
}