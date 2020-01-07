import { createSelector } from 'reselect';

const selectUser = (state:any) => state.user;

const selectCart = (state:any) => state.cart;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)