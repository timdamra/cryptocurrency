import actions from 'actions'

const { TOP_LIST_SUCCESS,  TOP_LIST_FAILURE } = actions

export function topListReducer(state = [], action) {
  switch (action.type) {
    case TOP_LIST_SUCCESS:

      console.log(action.payload)
      return action.payload
    case TOP_LIST_FAILURE:

      console.log(action.payload)
      return action.payload
    default:
      return state
  }
}
