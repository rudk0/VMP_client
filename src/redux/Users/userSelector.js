import {createSelector} from "reselect";

export const usersSelector = createSelector(
  [state => state.user.users],
  users => users
)