import { Actions } from '../common/actions';

export const updateUserProfileName = (newName : string) => ({  
    type: Actions.UPDATE_USERPROFILE_NAME,
    newName : newName,  
});
