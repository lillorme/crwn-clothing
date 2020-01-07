import {UserActionTypes} from './user.types';

const setCurrentUser = (user:any) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
});

export default setCurrentUser;