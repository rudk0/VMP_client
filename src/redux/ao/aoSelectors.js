
import {createSelector} from "reselect";

export const aoTypesSelector = createSelector(
  [state => state.ao.types],
  types => types
)