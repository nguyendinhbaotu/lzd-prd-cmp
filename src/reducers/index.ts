import { combineReducers} from 'redux';
import { userProfileReducer, UserProfileState } from './userProfile';
import { ItemInformationState, itemInformationReducer } from './parseUrl';

export interface RootState {
  userProfileReducer : UserProfileState;
  itemInformationReducer : ItemInformationState;
};

export const rootReducer = combineReducers<RootState>({
  userProfileReducer,
  itemInformationReducer
});
