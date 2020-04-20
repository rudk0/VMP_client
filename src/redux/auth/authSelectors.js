import { createSelector } from 'reselect';


export const isAuthorizedSelector = createSelector(
    [state => state.auth],
    authReducer => !!authReducer.token,
);

export const userSelector = createSelector(
  [state => state.auth],
  auth => auth
)