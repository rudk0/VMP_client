import {createSelector} from "reselect";

export const usersSelector = createSelector(
  [state => state.user.users],
  users => users
)
export const userSelector = createSelector(
  [state => state.user.user],
  user => user
)