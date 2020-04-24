import {createSelector} from "reselect";

export const aoTypesSelector = createSelector(
  [state => state.ao.filters.types],
  types => types
)
export const aoCitySelector = createSelector(
  [state => state.ao.filters.cities],
  cities => cities
)
export const aoFormatsSelector = createSelector(
  [state => state.ao.filters.formats],
  formats => formats
)
export const aoSegmentSelector = createSelector(
    [state => state.ao.filters.segments],
    segments => segments
)