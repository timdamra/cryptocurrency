import actions from 'actions'

const {
  HISTORICAL_DATA_SUCCESS,
  HISTORICAL_DATA_FAILURE
} = actions

export const historicalDataReducer = (state = {}, action) => {
  switch (action.type) {
    case HISTORICAL_DATA_SUCCESS:
      return action.payload
    case HISTORICAL_DATA_FAILURE:
      return action.payload
    default:
      return state
  }
}
