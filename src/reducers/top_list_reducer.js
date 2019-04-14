import actions from 'actions'

const { TOP_LIST_SUCCESS, TOP_LIST_FAILURE } = actions

export function topListReducer(state = [], action) {
  switch (action.type) {
    case TOP_LIST_SUCCESS:

      return action.payload
    case TOP_LIST_FAILURE:

      return action.payload
    default:
      return state
  }
}
